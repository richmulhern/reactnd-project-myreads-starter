import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'
import Changer from './Changer'

class Detail extends Component {
    state = {
        book: []
    }

    getBook = (id) => {
        BooksAPI.get(id).then(book => {
            return book
        })
    }

    componentWillMount() {
        BooksAPI.get(this.props.match.params.id).then(book =>
            this.setState({book})
        )
    }

    render() {
        const {book} = this.state

        return(
            <Modal isOpen={true} contentLabel="Modal">
                <header>
                    <img src={book.imageLinks !== undefined ? book.imageLinks.thumbnail : ""} alt={book.title} />
                    <div className="book-info">
                        <h1>{book.title}</h1>
                        <h2>{book.subtitle}</h2>
                        <h3>{book.authors !== undefined ? book.authors.join(', ') : ''}</h3>
                        <h4>{book.publisher}</h4>
                    </div>
                    <p>{book.description}</p>
                </header>
                <div className="close-modal"><Link to="/">Close</Link></div>
                <Changer book={book} updateBooks={this.props.updateBooks} />
            </Modal>
        )
    }
}

export default Detail;
