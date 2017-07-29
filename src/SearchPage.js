import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchPage extends Component {
    state = {
        foundBooks: []
    }

    searchForBook = (query) => {
        // In the contacts example app the way this was handled was by putting the query in the state
        // then in the render method if the query changed handle it in the render method. My problem
        // with that is if it was a much larger app you would be putting a ton of code into the render
        // method which seems like a bad place to put it. So here instead of just handling the query
        // I put the books in the state. Is there a problem with this approach? It keeps the render
        // method just for the JSX, makes the code more functional and easier to read. However the
        // state is much larger with an array of objects over just story a query.
        if (query.trim()) {
            BooksAPI.search(query).then((foundBooks) => {
                // The API can return an object for an empty result set.
                if (Array.isArray(foundBooks)) {
                    foundBooks.map(foundBook => {
                        const ownedBook = this.props.books.find(book => {
                            return book.id === foundBook.id
                        })

                        // if a book is already owned (on the list) then set it to that shelf if not mark
                        // it as none. it seems the API returns some books with a shelf by default
                        if (ownedBook !== undefined) {
                            foundBook.shelf = ownedBook.shelf
                        } else {
                            foundBook.shelf = 'none'
                        }

                        return foundBook
                    })
                    this.setState({ foundBooks })
                } else {
                    this.setState({foundBooks: [] })
                }
            })
        } else {
            this.setState({foundBooks: []})
        }
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
                            <Book book={book} updateBooks={this.props.updateBooks} />
                        </li>
                        )}
                  </ol>
                </div>
            </div>
        )
    }
}

export default SearchPage
