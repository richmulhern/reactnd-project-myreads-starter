import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage';
import BookList from './BookList';
import Detail from './Detail';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {

    state = {
        books: []
    }

    // One thing I wish the class was clearer on was componentDidMount and componentWillMount. During the
    // lesson I was thinking, "Why wouldn't componentWillMount make more sense since it happens before the DOM?
    // Don't I want my data to be there before the DOM?" I looked it up and there are some great write-ups on
    // this, but the course doesn't explain it. It just tells you componentDidMount is the best option and to
    // just use that. A little more clarity there would have been great.
    componentDidMount() {
        // load all the books into state
        BooksAPI.getAll().then(books => {
            this.setState({ books })
        })
    }

    updateBooks = (book, shelf) => {
        BooksAPI.update(book, shelf).then(success => {
            if (shelf === 'none') {
                return this.removeBook(book)
            }

            const oldShelf = book.shelf
            book.shelf = shelf

            if (oldShelf === 'none') {
                return this.addBook(book);
            }

            const oldBooks = this.state.books
            const books = oldBooks
                .map(oldBook => {
                    if (oldBook.id === book.id) {
                        oldBook.shelf = book.shelf
                    }

                    return oldBook
                })

            this.setState({ books });
        });
    }

    addBook = (book) => {
        this.setState(state => ({
            books: state.books.concat([ book ])
        }))
    }

    removeBook = (book) => {
        const books = this.state.books.filter(oldBook => oldBook.id !== book.id)
        this.setState(state => ({ books }))
    }

    render() {
        return (
            <div className="app">
                <Route path="/search/:query?" render={props => (
                    <SearchPage
                        {...props}
                        books={this.state.books}
                        updateBooks={this.updateBooks} />
                )} />
                <Route exact path="/" render={() => (
                    <BookList
                        books={this.state.books}
                        updateBooks={this.updateBooks} />
                )}>
                </Route>
                <Route path="/book" render={() => (
                    <BookList
                        books={this.state.books}
                        updateBooks={this.updateBooks} />
                )} />
                <Route path="/book/:id" render={props => (
                    <Detail {...props} updateBooks={this.updateBooks} />
                )} />
            </div>
        )
    }
}

export default BooksApp
