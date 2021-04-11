import React from 'react'
import Bookshelf from './Bookshelf'

function ListBooks(props) {

    const { onChangeScreen } = props

    return(
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <Bookshelf sectionName="Want To Read" />
                    <Bookshelf sectionName="Currently Reading" />
                    <Bookshelf sectionName="Read" />
                </div>
            </div>
            <div className="open-search">
                <button onClick={() => onChangeScreen(true)}>Add a book</button>
            </div>
        </div>
    )
}

export default ListBooks