import React from 'react';
import PropTypes from 'prop-types';
import { Selectors } from '../Ducks';
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

const Single = (p) => {
  var d = useDispatch();
  const classes = useStyles();
  React.useEffect(() => {
    d({type: 'SELECT_SINGLE', payload: p.match.params.id});
  }, []);
  const book = useSelector(Selectors.singleBook);
  const bookId = useSelector(Selectors.singleSelector);
  console.log(book, bookId);
  return book ? (
      <Table className={classes.table} aria-label="simple table">

        {(<BookRow book={book} />)}
      </Table>
  ) :  'Can\'t find book';
}
Single.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      testRouting: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Single;
