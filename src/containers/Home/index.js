/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';
import { compose } from 'redux';
import HomeView from 'views/Home';
import {
  fetchItems,
} from './actions';

// States
const mapStateToProps = state => state;

// Props
const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(fetchItems),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
)(HomeView);
