import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { BookResult } from './index';

const BookResults = ({ books }) => (
  <Grid container direction={'row'} justify={'center'} alignItems={'center'} spacing={4}>
    {books.map(book =>
      <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={`book-grid-${book.bookId}`}>
        <BookResult key={`book-${book.bookId}`} {...book} />
      </Grid>
    )}
  </Grid>
);

BookResults.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape(BookResult.propTypes)).isRequired,
};

export default BookResults;
