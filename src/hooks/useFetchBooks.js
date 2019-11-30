import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../actions';

const useFetchBooks = () => {
  const dispatch = useDispatch();
  const bookList = useSelector(({ books }) => books);
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return [bookList];
};

export default useFetchBooks;
