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
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  render() {
    console.log(this.state.books)
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks allBooks={this.state.books} />
        )} />
        <Route path="/search" component={SearchBooks} />
      </div>
    )
  }
}

export default BooksApp
