import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Book from '../../components/c-book/Book';

// Component that retrieves the JSON data for the books
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
      })
      .catch(function (error) {
        console.log(error);
      })
    ;
  }

  render() {
    return (
      <ul className="l-book-grid">
        {this.state.books.map(book =>
          (
            <li
              key={book.book_id}
              className="l-books-grid__item"
            >
              <Link
                className="c-book-link"
                to={{ pathname: `/book/${book.book_id}` }}>
                <Book {...book} />
              </Link>
            </li>
          ))
        }
      </ul>
    );
  }
}

export default BooksGrid;
