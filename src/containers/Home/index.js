/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import HomeView from 'views/Home';
import {
  fetchItemsRequest,
} from './actions';
import {
  makeSelectAllBooks,
} from './selectors';

const mapStateToProps = createStructuredSelector({
  allBooks: makeSelectAllBooks(),
});

const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(fetchItemsRequest()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
)(HomeView);
