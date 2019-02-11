import React from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';
import PropTypes from 'prop-types';

class Search extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onQueryChange: PropTypes.func.isRequired
  }

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState(() => ({
      query: query
    }));
    this.props.onQueryChange(query);
  }

  getBooksInLibrary = (queriedBooks, books) => {
    let result = []
    books.forEach(book => {
      queriedBooks.forEach (queriedBook => {
        if (book.id === queriedBook.id) {
          result.push(book)
        }
      })
    });
    return result;
  }


  render() {
    const { books, queriedBooks, onShelfChange } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />

          </div>
        </div>
        <div className="search-books-results">
          <Bookshelf
            title='Currently Reading'
            books={this.getBooksInLibrary(queriedBooks, books.filter((book) => book.shelf === "currentlyReading"))}
            onShelfChange={onShelfChange}
          />
          <Bookshelf
            title='Want to Read'
            books={this.getBooksInLibrary(queriedBooks, books.filter((book) => book.shelf === "wantToRead"))}
            onShelfChange={onShelfChange}
          />
          <Bookshelf
            title='Read'
            books={this.getBooksInLibrary(queriedBooks, books.filter((book) => book.shelf === "read"))}
            onShelfChange={onShelfChange}
          />
          <Bookshelf
            title='None'
            books={queriedBooks}
            onShelfChange={onShelfChange}
          />
        </div>
      </div>
    );
  }
}

export default Search;