import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import BooksList from './BooksList'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Search/>
        ) : (
          <BooksList/>
        )}
      </div>
    )
  }
}

export default BooksApp
