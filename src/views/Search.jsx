import React from 'react';
import PropTypes from 'prop-types';
import Layout from './Layout';
import BookResults from '../components/BookResults';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadBooks } from '../actions/bookActions';
import Loading from './Loading';

const Search = ({ books, dispatch }) => {
  useEffect(() => {
    dispatch(loadBooks());
  }, [dispatch]);

  let render = books.length ? <BookResults books={books}/> : <Loading />;

  return (
    <React.Fragment>
      {render}
    </React.Fragment>
  );
};

Search.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => {
  return {
    books: state.books,
  };
};

export default Layout(connect(mapStateToProps)(Search));
