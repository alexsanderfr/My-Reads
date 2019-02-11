import React from 'react';
import PropTypes from 'prop-types';

class Book extends React.Component {
    static propTypes = {
        book: PropTypes.object.isRequired
    }

    handleChange = (event) => {
        this.props.onShelfChange(this.props.book, event.target.value);
    }

    render() {
        const { book } = this.props;
        const { title, authors } = book;
        let backgroundImage = '';
        if (book.imageLinks !== undefined) {
            backgroundImage = book.imageLinks.thumbnail;
        }


        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url("${backgroundImage}"` }}></div>
                    <div className="book-shelf-changer">
                        <select onChange={this.handleChange} value="move">
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors}</div>
            </div>
        );
    }
}

export default Book;