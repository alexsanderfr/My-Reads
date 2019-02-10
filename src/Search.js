import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import Bookshelf from './Bookshelf'
import PropTypes from 'prop-types'

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
    }))
    this.props.onQueryChange(query)
  }


  render() {
    const { books, queriedBooks } = this.props
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
            books={books.filter((book) => book.shelf === "currentlyReading")}
          />
          <Bookshelf
            title='Want to Read'
            books={books.filter((book) => book.shelf === "wantToRead")}
          />
          <Bookshelf
            title='Read'
            books={books.filter((book) => book.shelf === "read")}
          />
          <Bookshelf
            title='None'
            books={queriedBooks}
          />
        </div>
      </div>
    )
  }
}

export default Search