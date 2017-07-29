import React, { Component } from 'react';

class Book extends Component {
    updateBook = (book, shelf) => {
        const oldShelf = book.shelf
        book.shelf = shelf

        if (book.shelf ==='none') {
            return this.props.removeBook(book)
        } else if (oldShelf === 'none') {
            return this.props.addBook(book)
        }

        return this.props.updateBooks(book)
    }

    render() {
        const {book} = this.props;

        return(

            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                        <div className="book-shelf-changer">
                            <select value={book.shelf} onChange={(e) => { this.updateBook(book, e.target.value) }}>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors !== undefined ? book.authors.join(', ') : ''}</div>
            </div>
        )
    }
}

export default Book;
