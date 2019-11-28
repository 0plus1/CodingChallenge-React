import React from 'react';
import PropTypes from 'prop-types';
import BookResult, { BookResultPropType } from './BookResult';

const BookResults = ({ books }) => (
  <div>
    {books.map(book => <BookResult key={`book-${book.bookId}`} {...book} />)}
  </div>
);

BookResults.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape(BookResultPropType)).isRequired,
};

export default BookResults;
