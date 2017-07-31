import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component {
    static propTypes = {
        label: PropTypes.string,
        shelf: PropTypes.string.isRequired,
        books: PropTypes.arrayOf(PropTypes.object).isRequired,
        updateBooks: PropTypes.func.isRequired
    }

    render() {
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.label}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.filter((book) => book.shelf === this.props.shelf).map((book, index) => (
                        <li key={index}>
                            <Book
                                book={book}
                                updateBooks={this.props.updateBooks} />
                        </li>
                        ))}
                    </ol>
                </div>
            </div>
        );
    }
}

export default BookShelf;
