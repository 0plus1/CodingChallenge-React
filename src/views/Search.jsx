import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadBooks } from '../actions/bookActions';
import { BookResults, Loading, Layout } from '../components';
import {bindActionCreators} from "redux"

const Search = ({ books, loadBooks }) => {
  // if the route is accessed directly there will be no book to find - so go fetch
  useEffect(() => {
    if (books.length < 1) {
      loadBooks();
    }
  }, [loadBooks, books]);

  let render = books.length ? <BookResults books={books}/> : <Loading />;

  return (
    <React.Fragment>
      {render}
    </React.Fragment>
  );
};

Search.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadBooks: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    books: state.books,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  loadBooks
}, dispatch);

export default Layout(connect(mapStateToProps, mapDispatchToProps)(Search));
