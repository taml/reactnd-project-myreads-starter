import React from 'react'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import { Route } from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    this.getBooks()
  }

  getBooks() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  updateBooks = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then((book) => {
        this.getBooks()
      })
  }

  render() {
    console.log(this.state.books)
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks allBooks={this.state.books} onUpdateBook={this.updateBooks} />
        )} />
        <Route path="/search" render={() => (
          <SearchBooks allBooks={this.state.books} onUpdateBook={this.updateBooks} />
        )} />
      </div>
    )
  }
}

export default BooksApp
