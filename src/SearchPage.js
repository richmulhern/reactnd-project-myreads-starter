import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchPage extends Component {
    state = {
        foundBooks: []
    }

    searchForBook(query) {
        BooksAPI.search(query).then((foundBooks) => {
            this.setState({ foundBooks })
        })
    }

    render() {
        return(
          <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" onChange={(event) => this.searchForBook(event.target.value)}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                { this.state.foundBooks.map((book, index) =>
                    <li key={index}>
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
