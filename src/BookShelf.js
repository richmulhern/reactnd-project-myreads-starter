import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component {
    static propTypes = {
        label: PropTypes.string,
        shelf: PropTypes.string.isRequired
    }

    render() {
        return(
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.label}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {this.props.books.filter((book) => book.shelf === this.props.shelf).map((book) => (
                      <li key={book.id}>
                        <Book book={book} />
                      </li>
                    ))}
                    </ol>
                  </div>
                </div>
        );
    }
}

export default BookShelf;
