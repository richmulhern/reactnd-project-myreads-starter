import React from 'react';

function Changer(props) {
    const {book} = props

    return(
        <div className="book-shelf-changer">
            <select value={book.shelf} onChange={(e) => { props.updateBooks(book, e.target.value) }}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}

export default Changer;
