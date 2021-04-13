import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import ListSearchBooks from './ListSearchBooks'
import { Link } from 'react-router-dom'


class SearchBooks extends Component {

    state = {
        bookQuery: "",
        booksReturned: [], 
        querySuccessful: false
    }

    updateBookQuery = (bookQuery) => {
        this.setState(() => ({
            bookQuery, 
        }))
        if (bookQuery !== "") {
            BooksAPI.search(bookQuery)
            .then((books) => {
                if (books.length > 0) {
                    this.setState(() => ({
                        booksReturned: books,
                        querySuccessful: true
                    }))
                } else {
                    this.clearBooksReturned()
                }
            })
        } else {
            this.clearBooksReturned()
        }
    }

    clearBooksReturned = () => {
        this.setState(() => ({
            booksReturned: [],
            querySuccessful: false 
        }))
    }
    
    clearBookQuery = () => {
        this.updateBookQuery("")
    }

    compareBooks = (booksReturned, allBooks) => {
        booksReturned.map((book) => {
            allBooks.map((bk) => {
                if(book.id === bk.id){
                    Object.assign(book, {shelf: bk.shelf})
                }
            })
            if (typeof book.shelf === "undefined") {
                Object.assign(book, {shelf: "none"})
            }
        })
        return booksReturned
    }

    render() {

        const { bookQuery, booksReturned, querySuccessful } = this.state
        const { allBooks, onUpdateBook } = this.props

        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/">
                        <button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" 
                        value={bookQuery} onChange={(e) => this.updateBookQuery(e.target.value)}/>
                    </div>
                </div>
                <div className="search-books-results">
                    {!querySuccessful && <p>No books available, try searching...</p>}
                    <ListSearchBooks onUpdateBook={onUpdateBook} booksReturned={this.compareBooks(booksReturned, allBooks)} />
                </div>
            </div>
        )
    }
}

export default SearchBooks