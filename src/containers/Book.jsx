import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../actions';
import useFetchBooks from '../hooks/useFetchBooks';

const BookStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const Book = ({ match }) => {
  useFetchBooks();


  return (
    <div data-test="bookComponent" style={BookStyle}>
      <h1>
      Welcome!Book
      </h1>
      {(match.params.testRouting) && (
      <p>
        {match.params.testRouting}
      </p>
      )}
    </div>
  );
};


Book.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      testRouting: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Book;
