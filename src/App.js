import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import BooksList from './BooksList'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [],
    queriedBooks: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => this.setState({
      books: books
    }))
  }

  search = (query) => {
    BooksAPI.search(query).then((data) => {
    if (data === undefined || data.error === "empty query") {
        this.setState({
          queriedBooks: []
        })
      } else {
        this.setState({
          queriedBooks: data
        })
      }
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BooksList books={this.state.books} />
        )} />
        <Route path='/search' render={() => (
          <Search books={this.state.queriedBooks} onQueryChange={this.search} />
        )} />
      </div>
    )
  }
}

export default BooksApp
