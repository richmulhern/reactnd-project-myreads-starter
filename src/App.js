import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage';
import BookList from './BookList';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {

  state = {
    books: []
  }

  componentDidMount() {
    // load all the books into state
    BooksAPI.getAll().then((books) => {
        this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
            <BookList books={this.state.books} />
        )} />
        <Route path="/search" render={() => (
            <SearchPage />
        )} />
      </div>
    )
  }
}

export default BooksApp
