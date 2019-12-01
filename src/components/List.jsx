import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchBooks } from '../actions';
import useFetchBooks from '../hooks/useFetchBooks';
import Loading from './Loading';

const List = props => (
  <div data-test="listComponent">

    { props.books.map(
      book => <div key={`${book.book_id}`}>{book.book_id}</div>,
    ) }

  </div>
);


List.propTypes = {

};

export default List;
