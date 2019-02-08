import React from 'react'
import PropTypes from 'prop-types';

class Book extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        authors: PropTypes.string.isRequired,
        backgroundImage: PropTypes.string.isRequired
    }

    render() {
        const {title, authors, backgroundImage} = this.props

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url("${backgroundImage}"` }}></div>
                    <div className="book-shelf-changer">
                        <select>
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
        )
    }
}

export default Book