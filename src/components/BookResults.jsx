import React from 'react';
import PropTypes from 'prop-types';
import BookResult from './BookResult';

const BookResults = ({ books }) => (
  <div>
    {books.map(book => <BookResult key={`book-${book.bookId}`} {...book} />)}
  </div>
);

BookResults.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape(BookResult.propTypes)).isRequired,
};

export default BookResults;
