import React from 'react';
import PropTypes from 'prop-types';
import useFetchBooks from '../hooks/useFetchBooks';
import Layout from '../components/Layout';
import useCurrentBook from '../hooks/useCurrentBook';
import Loading from '../components/Loading';
import Item from '../components/Item';

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

  return (
    <div data-test="bookComponent">
      <Item book={currentBook} />
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
