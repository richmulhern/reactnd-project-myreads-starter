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
                        <BookShelf
                            label="Currently Reading"
                            shelf="currentlyReading"
                            books={this.props.books}
                            updateBooks={this.props.updateBooks}
                            removeBook={this.props.removeBook} />
                        <BookShelf
                            label="Want To Read"
                            shelf="wantToRead"
                            books={this.props.books}
                            updateBooks={this.props.updateBooks}
                            removeBook={this.props.removeBook} />
                        <BookShelf
                            label="Read"
                            shelf="read"
                            books={this.props.books}
                            updateBooks={this.props.updateBooks}
                            removeBook={this.props.removeBook} />
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
