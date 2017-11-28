import React from 'react';
import axios from 'axios';

// Component that retrieves the JSON data for the books
// and processes the data into
class BooksGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    axios.get('https://my-json-server.typicode.com/0plus1/CodingChallenge-react/books')
      .then((response) => {
        const books = response.data;
        this.setState({ books });
      });
  }

  render() {
    return (
      <ul className="l-book-grid">
        {this.state.books.map(book =>
          (
            <li
              className="l-book-grid__item c-book"
              key={book.book_id}
            >
              <img
                className="c-book__image"
                src={book.cover}
                width="400"
                height="300"
                alt={book.name}
              />
              <div className="c-book__details">
                <ul className="c-details">
                  <li className="c-details__title">Title: {book.name}</li>
                  <li className="c-details__author">Author: {book.author}</li>
                  <li className="c-details__date-published">Published: {book.published_at}</li>
                  <li className="c-details__isbn">ISBN: {book.isbn}</li>
                </ul>
              </div>
            </li>
          ))
        }
      </ul>
    );
  }
}

export default BooksGrid;
