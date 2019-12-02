import React from 'react';
import PropTypes from 'prop-types';
import { LoadAllBooks, Selectors } from '../Ducks';
import { useDispatch, useSelector } from 'react-redux';
import BookRow from '../components/BookRow';
import * as _ from 'ramda';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
});

const Home = ({ match }) => {
  var d = useDispatch();
  const classes = useStyles();
  React.useEffect(() => {
    d(LoadAllBooks());
  }, []);
  const books = useSelector(Selectors.booksSelector);
  return books ? (
      <Table className={classes.table} aria-label="simple table">

        {_.map(b => <BookRow book={b} />, books)}
      </Table>
  ) : 'Loading books...';
}
Home.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
    }).isRequired,
  }).isRequired,
};

export default Home;
