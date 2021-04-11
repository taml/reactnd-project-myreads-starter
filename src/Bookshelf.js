import React from 'react'
import Book from './Book'


function Bookshelf(props) {

    const { sectionName, allBooks } = props
    const sectionKey = Object.keys(sectionName)[0]

    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{sectionName[sectionKey]}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {allBooks.filter(book => book.shelf === sectionKey).map((book) => (
                            <li key={book.id}>
                                <Book bookTitle={book.title} bookAuthor={book.authors} bookImg={book.imageLinks.thumbnail}/>
                            </li>
                        ))}
                    </ol>
                </div>
        </div>
    )
}

export default Bookshelf