import React from 'react';
const axios = require('axios');

class BookRow extends React.Component {
    render() {
        const book = this.props.book;
        return (
            <tr>
                <td>{book.book_id}</td>
                <td>{book.name}</td>
                <td>{book.author}</td>
                <td>{book.isbn}</td>
                <td><img src={book.cover} alt={`${book.author} - ${book.name}`} /></td>
                <td>{book.published_at}</td>
            </tr>
        );
    }
}

class BookTable extends React.Component {
    render() {

        const rows = [];

        this.props.books.forEach((book) => {
            rows.push(
                <BookRow
                    book={book}
                    key={book.book_id}
                />
            );
        });

        return (
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Author</th>
                    <th>ISBN</th>
                    <th>Cover</th>
                    <th>Published At</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}


class Books extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            BOOKS: [],
        }
    }

    componentDidMount() {
        axios.get('https://my-json-server.typicode.com/0plus1/CodingChallenge-react/books')
            .then(response => {
                this.setState({ BOOKS: response.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        const { BOOKS } = this.state;
        return (
            <div className="books-table">
                 <BookTable
                    books={BOOKS}
                />
            </div>
        );
    }
}

export default Books;


