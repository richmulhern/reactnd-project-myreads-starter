import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import BookShelf from './BookShelf';

class BookList extends Component {
    render() {
        return(
            <div className="list-books">
                <div className="list-books-title"><h1>MyReads</h1></div>
                <div className="list-books-content">
                    <div>
                        <BookShelf label="Currently Reading" books={this.props.books} shelf="currentlyReading" updateBooks={this.props.updateBooks} />
                        <BookShelf label="Want To Read" books={this.props.books} shelf="wantToRead" updateBooks={this.props.updateBooks} />
                        <BookShelf label="Read" books={this.props.books} shelf="read" updateBooks={this.props.updateBooks} />
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
