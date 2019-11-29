import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadBooks } from '../actions/bookActions';
import BookResults from '../components/BookResults';
import Loading from '../components/Loading';
import Layout from '../components/Layout';
import { bindActionCreators } from 'redux';

const Search = ({ books, loadBooks }) => {
  useEffect(() => {
    if (books.length < 1) {
      loadBooks();
    }
  }, [loadBooks, books]);

  let render = books.length ? <BookResults books={books}/> : <Loading/>;

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

const mapStateToProps = ({ books: { books } }) => {
  return {
    books
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  loadBooks
}, dispatch);

export default Layout(connect(mapStateToProps, mapDispatchToProps)(Search));
