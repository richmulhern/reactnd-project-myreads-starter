import React from 'react'
import { Link } from 'react-router-dom'
import Changer from './Changer'
import PropTypes from 'prop-types'

function Book(props) {
    const {book} = props;
    const backgroundImage = book.imageLinks ? `url("${book.imageLinks.thumbnail}")` : 'none';
    return(
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: backgroundImage }}></div>
                    <Changer book={book} updateBooks={props.updateBooks} />
                </div>
            <div className="book-title"><Link to={`/book/${book.id}`}>{book.title}</Link></div>
            <div className="book-authors">{book.authors !== undefined ? book.authors.join(', ') : ''}</div>
        </div>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    updateBooks: PropTypes.func.isRequired
}

export default Book;
