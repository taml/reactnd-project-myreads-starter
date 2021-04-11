import React from 'react'
import Bookshelf from './Bookshelf'
import { Link } from 'react-router-dom'

function ListBooks(props) {

    const { allBooks } = props

    return(
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <Bookshelf sectionName={{"wantToRead":"Want To Read"}} allBooks={allBooks} />
                    <Bookshelf sectionName={{"currentlyReading":"Currently Reading"}} allBooks={allBooks} />
                    <Bookshelf sectionName={{"read": "Read"}} allBooks={allBooks} />
                </div>
            </div>
            <div className="open-search">
                <Link to="/search" >
                    <button>Add a book</button>
                </Link>
            </div>
        </div>
    )
}

export default ListBooks