import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import BooksList from './BooksList'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => this.setState({
      books: books
    }))
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BooksList books={this.state.books}
          />
        )} />
        <Route path='/search' render={() => (
          <Search />
        )} />
      </div>
    )
  }
}

export default BooksApp
