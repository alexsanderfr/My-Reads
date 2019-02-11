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
    this.getAll();
  }

  getAll = () => {
    BooksAPI.getAll().then((books) => this.setState({
      books: books
    }));
  }

  search = (query) => {
    BooksAPI.search(query).then((data) => {
      if (data === undefined || data.error === "empty query") {
        this.setState({
          queriedBooks: []
        });
      } else {
        this.setState({
          queriedBooks: data
        });
      }
    });
  }

  update = (book, shelf) => {
    BooksAPI.update(book, shelf).then((data) => {
      this.getAll();
    })
  }

  getBooksInLibrary = (queriedBooks, books) => {
    let results = [];
    queriedBooks.forEach(queriedBook => {
      let bookAdded = false;
      books.forEach(book => {
        if (!bookAdded && book.id === queriedBook.id) {
          results.push(book)
          bookAdded = true;
        }
      })
      if (!bookAdded) {
        results.push(queriedBook);
      }
    });
    return results;
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
            queriedBooks={this.getBooksInLibrary(this.state.queriedBooks, this.state.books)}
            onQueryChange={this.search}
            onShelfChange={this.update}
          />
        )} />
      </div>
    );
  }
}

export default BooksApp;