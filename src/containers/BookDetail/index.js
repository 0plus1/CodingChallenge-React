/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import get from 'lodash/get';
import BookDetailView from 'views/BookDetail';
import {
  fetchItemsRequest,
} from 'containers/Home/actions';
import {
  makeSelectAllBooks,
} from 'containers/Home/selectors';
import {
  makeSelectBook,
  makeRelatedBooks,
} from './selectors';

const mapStateToProps = createStructuredSelector({
  allBooks: makeSelectAllBooks(),
});

const makeMapStateToProps = (state, ownProps) => {
  const { allBooks } = mapStateToProps(state, ownProps);
  const bookId = Number(get(ownProps, 'match.params.id') || 0);
  return {
    allRelatedBooks: makeRelatedBooks(allBooks, bookId),
    book: makeSelectBook(allBooks, bookId),
  };
};

const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(fetchItemsRequest()),
});

const withConnect = connect(
  makeMapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
)(BookDetailView);
