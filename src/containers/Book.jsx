import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../actions';
import useFetchBooks from '../hooks/useFetchBooks';
import Layout from '../components/Layout';
import useCurrentBook from '../hooks/useCurrentBook';
import Loading from '../components/Loading';

const BookStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const Book = Layout(({ match }) => {
  const [books] = useFetchBooks();
  const [currentBook] = useCurrentBook(match.params.book_id);

  if (!books
    || books.length === 0
    || !match.params.book_id
    || currentBook === {}
    || currentBook === null
  ) {
    return <Loading />;
  }
  console.log(currentBook);

  return (
    <div data-test="bookComponent" style={BookStyle}>
      {currentBook.book_id}
    </div>
  );
});


Book.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      book_id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Book;
