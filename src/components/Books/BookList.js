import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "./Card";
import Spinner from "../common/Spinner";

const BookList = ({ books }) => {
  return (
    <>
      {books.length > 0 ? (
        books.map(book => {
          return (
            <div key={book.name}>
              <Card>
                <img
                  className='card-img-top'
                  src={book.cover}
                  alt={book.name}
                />
                {book.name} {book.isbn} {book.published_at} {book.author}
                <Link to={"/book/" + book.book_id}>
                  <p>Show Details</p>
                </Link>
              </Card>
            </div>
          );
        })
      ) : (
        <Spinner />
      )}
    </>
  );
};

BookList.propTypes = {
  books: PropTypes.array.isRequired
};

export default BookList;
