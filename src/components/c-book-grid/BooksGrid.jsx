import React from 'react';
import axios from 'axios';
import Book from '../../components/c-book/Book';

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
              <Book {...book} />
            </li>
          ))
        }
      </ul>
    );
  }
}

export default BooksGrid;
