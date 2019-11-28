import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadBooks } from '../actions/bookActions';
import { BookResult, Loading, Layout } from '../components';

const BookView = ({ book, books, dispatch }) => {
  // if the route is accessed directly there will be no book to find - so go fetch
  useEffect(() => {
    if (books.length < 1) {
      dispatch(loadBooks());
    }
  }, [dispatch, books]);

  return book ? <BookResult {...book} /> : <Loading />;
};

BookView.propTypes = {
  book: PropTypes.shape(BookResult.propTypes),
};

const mapStateToProps = (state, ownProps) => {
  const { bookId } = ownProps.match.params;
  const foundBook = state.books.find(book => book.bookId === parseInt(bookId, 10));
  const book = foundBook ? { ...foundBook } : null;
  return {
    book,
    books: state.books,
  };
};

export default Layout(connect(mapStateToProps)(BookView));
