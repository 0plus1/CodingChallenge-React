import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "./Card";

const BookList = ({ books }) => {
  return (
    <>
      {books.map(book => {
        return (
          <div key={book.name}>
            <Card>
              <img
                className='card-img-top'
                src={book.cover}
                alt='Photo of books'
              />
              {book.name} {book.isbn} {book.published_at} {book.author}
              <Link to={"/book/" + book.book_id}>
                <p>Learn More</p>
              </Link>
            </Card>
          </div>
        );
      })}
    </>
  );
};

BookList.propTypes = {
  books: PropTypes.array.isRequired
};

export default BookList;
