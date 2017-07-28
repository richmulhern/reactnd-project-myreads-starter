import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class SearchPage extends Component {
    handleSearch = (e) => {
        e.preventDefault();
        console.log(e.target.value);
    }

    render() {
        return(
          <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" onChange={(event) => this.props.searchForBook(event.target.value)}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                { this.props.foundBooks.map((book) =>
                    <li key={book.id}>
                        <Book book={book} />
                    </li>
                )}
              </ol>
            </div>
          </div>
        )
    }
}

export default SearchPage
