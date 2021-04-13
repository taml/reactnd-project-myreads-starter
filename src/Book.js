import React from 'react'
import cover from '../src/images/cover.png'

function Book(props) {

    const { singleBook, onUpdateBook } = props

        return(
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
                        backgroundImage: `url(${typeof singleBook.imageLinks !== "undefined" ? singleBook.imageLinks.thumbnail : cover})` }}></div>
                    <div className="book-shelf-changer">
                        <select value={singleBook.shelf} onChange={(e) => onUpdateBook(singleBook, e.target.value)}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{singleBook.title}</div>
                <div className="book-authors">{typeof singleBook.authors !== "undefined" ? singleBook.authors.map((author, index) => ((index ? ", " : "") + author)) : "Unknown"}</div>
            </div>
        )
}

export default Book