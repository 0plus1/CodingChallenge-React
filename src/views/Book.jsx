import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadBook } from '../actions/bookActions';
import BookResult from '../components/BookResult';
import Loading from '../components/Loading';
import Layout from '../components/Layout';
import { bindActionCreators } from 'redux';

const BookView = ({ book, loadBook, match }) => {
  const { bookId } = match.params;
  useEffect(() => {
    if (!book) {
      loadBook(bookId);
    }
  }, [loadBook, book, bookId]);

  return book ? <BookResult {...book} /> : <Loading/>;
};

BookView.propTypes = {
  book: PropTypes.shape(BookResult.propTypes),
  loadBook: PropTypes.func
};

const mapStateToProps = (state) => {
  const { book } = state.books;
  return {
    book,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  loadBook
}, dispatch);

export default Layout(connect(mapStateToProps, mapDispatchToProps)(BookView));
