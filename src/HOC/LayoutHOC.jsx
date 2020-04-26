import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { BookListComponentPropTypes, BookComponentPropTypes } from '../components/product-list/Book-List-Props';
import { fetchBooks } from '../actions';

const Layout = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const LayoutHOC = pageType => (WrapperComponent) => {
  class HOC extends Component {
    constructor(props) {
      super(props);

      this.state = {};
    }

    componentWillMount() {
      const { dispatch, match } = this.props;

      if (pageType === 'book-list') {
        dispatch(fetchBooks());
      }

      if (pageType === 'book-detail') {
        dispatch(fetchBooks(match.params.id));
      }
    }

    render() {
      return (
        <Layout>
          <h1>Books</h1>
          <nav><Link to="/">Book List</Link></nav>
          <WrapperComponent {...this.props} />
        </Layout>
      );
    }
  }

  HOC.propTypes = {
    dispatch: PropTypes.func.isRequired,
    isFetching: PropTypes.bool,
    books: BookListComponentPropTypes.books,
    book: BookComponentPropTypes,

    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  };


  HOC.defaultProps = {
    books: [],
    book: {},
    isFetching: false,
  };

  const mapStateToProps = state => ({
    isFetching: state.isFetching,
    books: state.books,
    book: state.book,
  });

  return connect(mapStateToProps)(HOC);
};


export default LayoutHOC;
