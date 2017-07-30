import React from 'react'
import { Link } from 'react-router-dom'
import Changer from './Changer'

function Book(props) {
    const {book} = props;

    return(
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                    <Changer book={book} updateBooks={props.updateBooks} />
                </div>
            <div className="book-title"><Link to={`/book/${book.id}`}>{book.title}</Link></div>
            <div className="book-authors">{book.authors !== undefined ? book.authors.join(', ') : ''}</div>
        </div>
    )
}

export default Book;
