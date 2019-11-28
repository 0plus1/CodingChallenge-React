import React from 'react';
import PropTypes from 'prop-types';
import Layout from './Layout';
import BookResults from '../components/BookResults';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadBooks } from '../actions/bookActions';
import Loading from './Loading';

const Search = ({ books, dispatch }) => {
  // if the route is accessed directly there will be no book to find - so go fetch
  useEffect(() => {
    if (books.length < 1) {
      dispatch(loadBooks());
    }
  }, [dispatch, books]);

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
