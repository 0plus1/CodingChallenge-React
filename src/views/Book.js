import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import BookResult from '../components/BookResult';
import Layout from './Layout';
import { connect } from 'react-redux';
import { loadBooks } from '../actions/bookActions';
import Loading from './Loading';

const BookView = ({ book, books, dispatch }) => {

  // if the route is accessed directly there will be no book to find - so go fetch
  useEffect(() => {
    if (books.length < 1) {
      dispatch(loadBooks());
    }
  }, [dispatch, books]);

  const render = book ? <BookResult {...book} /> : <Loading />;
  return render;
};

BookView.propTypes = {
  book: PropTypes.shape(BookResult.propTypes),
};

const mapStateToProps = (state, ownProps) => {
  const { bookId } = ownProps.match.params;
  const foundBook = state.books.find(book => book.bookId === parseInt(bookId, 10));

  let book = foundBook ? { ...foundBook } : null;

  return {
    book,
    books: state.books
  };
};

export default Layout(connect(mapStateToProps)(BookView));
