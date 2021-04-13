import React, { Component } from 'react'
import Book from './Book'


class ListSearchBooks extends Component {


    render() {

        const { onUpdateBook, booksReturned } = this.props

        return(
            <ol className="books-grid">
                {console.log(booksReturned)}
                {booksReturned.map((book) => (
                    <li key={book.id}>
                        <Book singleBook={book} onUpdateBook={onUpdateBook}/>
                    </li>
                ))}
            </ol>
        )
    }
}

export default ListSearchBooks


// Go through all items in books returned
// Check if id is in all books
// If id is in all books get shelf info and set shelf info
// Otherwise set shelf info to none
// Then pass book into li