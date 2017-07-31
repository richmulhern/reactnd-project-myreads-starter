import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf';

class BookList extends Component {
    static propTypes = {
        books: PropTypes.arrayOf(PropTypes.object).isRequired,
        updateBooks: PropTypes.func.isRequired
    }

    render() {
        return(
            <div className="list-books">
                <div className="list-books-title"><h1>MyReads</h1></div>
                <div className="list-books-content">
                    <div>
                        <BookShelf
                            label="Currently Reading"
                            shelf="currentlyReading"
                            books={this.props.books}
                            updateBooks={this.props.updateBooks} />
                        <BookShelf
                            label="Want To Read"
                            shelf="wantToRead"
                            books={this.props.books}
                            updateBooks={this.props.updateBooks} />
                        <BookShelf
                            label="Read"
                            shelf="read"
                            books={this.props.books}
                            updateBooks={this.props.updateBooks} />
                    </div>
                </div>
                <div className="open-search">
                    <Link to="search">Add a book</Link>
                </div>
            </div>
        )
    }
}

export default BookList
