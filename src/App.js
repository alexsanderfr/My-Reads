import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import Booklist from './Booklist'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [],
    queriedBooks: []
  }

  componentDidMount() {
    this.getAll()
  }

  getAll = () => {
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

  update = (book, shelf) => {
    BooksAPI.update(book, shelf).then((data) => {
      this.getAll()
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <Booklist
            books={this.state.books}
            onShelfChange={this.update}
          />
        )} />
        <Route path='/search' render={() => (
          <Search
            books={this.state.books}
            queriedBooks={this.state.queriedBooks}
            onQueryChange={this.search}
            onShelfChange={this.update}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
