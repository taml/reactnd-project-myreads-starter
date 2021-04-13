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
            Object.assign(book, {shelf: "none"})
            allBooks.map((bk) => {
                if(book.id === bk.id){
                    Object.assign(book, {shelf: bk.shelf})
                } 
            })
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
                    {!querySuccessful && <p className="search-prompt">No books available, try searching...</p>}
                    {querySuccessful &&  <ListSearchBooks onUpdateBook={onUpdateBook} 
                        booksReturned={this.compareBooks(booksReturned, allBooks)} clearQuery={this.clearBookQuery} />}
                </div>
            </div>
        )
    }
}

export default SearchBooks