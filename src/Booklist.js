import React from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';
import PropTypes from 'prop-types';

class Booklist extends React.Component {
    static propTypes = {
        books: PropTypes.array.isRequired
    }

    render() {
        const { books, onShelfChange } = this.props;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Bookshelf
                            title='Currently Reading'
                            books={books.filter((book) => book.shelf === "currentlyReading")}
                            onShelfChange={onShelfChange}
                        />
                        <Bookshelf
                            title='Want to Read'
                            books={books.filter((book) => book.shelf === "wantToRead")}
                            onShelfChange={onShelfChange}
                        />
                        <Bookshelf
                            title='Read'
                            books={books.filter((book) => book.shelf === "read")}
                            onShelfChange={onShelfChange}
                        />
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search'>
                        <button>Add a book</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Booklist;