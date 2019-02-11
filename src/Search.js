import React from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
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
    this.setState({ query });
    this.props.onQueryChange(query);
  }

  render() {
    const { queriedBooks, onShelfChange } = this.props;
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
          <ol className="books-grid">
            {queriedBooks.map((book) => (
              <li key={book.id}>
                <Book
                  book={book}
                  onShelfChange={onShelfChange}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;