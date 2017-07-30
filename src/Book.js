import React from 'react'
import { Link } from 'react-router-dom'

function Book(props) {
    const {book} = props;

    return(
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                    <div className="book-shelf-changer">
                        <select value={book.shelf} onChange={(e) => { props.updateBooks(book, e.target.value) }}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
            <div className="book-title"><Link to={`/book/${book.id}`}>{book.title}</Link></div>
            <div className="book-authors">{book.authors !== undefined ? book.authors.join(', ') : ''}</div>
        </div>
    )
}

export default Book;
