import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import store from '../../store';
import Book from '../../components/c-book/Book';

// Component that retrieves the JSON data for the books
// and processes the data into a loop that renders each book
// into a grid with two responsive breakpoints
class BooksGrid extends React.Component {
  componentDidMount() {
    axios.get('https://my-json-server.typicode.com/0plus1/CodingChallenge-react/books')
      .then((response) => {
        store.dispatch({
          type: 'BOOKS_SUCCESS',
          books: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      })
    ;
  }

  render() {
    return (
      <ul className="l-book-grid">
        {this.props.books.map(book =>
          (
            <li
              key={book.book_id}
              className="l-books-grid__item"
            >
              <Link to={{ pathname: `/book/${book.book_id}` }}>
                <Book {...book} />
              </Link>
            </li>
          ))
        }
      </ul>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    books: store.booksState.books,
  };
}

export default connect(mapStateToProps)(BooksGrid);
