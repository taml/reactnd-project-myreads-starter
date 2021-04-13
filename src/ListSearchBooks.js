import React from 'react'
import Book from './Book'


function ListSearchBooks(props) {

    const { onUpdateBook, booksReturned, clearQuery } = props

        return(
            <div>
                <ol className="books-grid">
                    {booksReturned.map((book) => (
                        <li key={book.id}>
                            <Book singleBook={book} onUpdateBook={onUpdateBook}/>
                        </li>
                    ))}
                </ol>
                <div className="reset-search-container">
                    <button className="reset-search"onClick={clearQuery}>Reset Search</button>
                </div>
            </div>
        )
}

export default ListSearchBooks