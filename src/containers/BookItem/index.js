import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import BookCard from '../../components/BookCard';
import {
  fetchBookRequest,
} from '../../actions/book';

const BookItem = ({ bookID, book, fetchBooks }) => {
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <StyledBook>
      <h1>
Book ID:
        {bookID}
      </h1>
      {book ? <BookCard book={book} /> : null}
    </StyledBook>
  );
};

const StyledBook = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div {
    width: 100%;
    max-width: 320px;
    display: flex;
    flex-wrap: wrap;
  }
`;

const mapStateToProps = (state, ownProps) => {
  const bookID = parseInt(ownProps.match.params.id, 10);
  const book = state.book.items.find((x) => x.book_id === bookID);

  return {
    bookID,
    book,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchBooks: () => {
    dispatch(fetchBookRequest());
  },
});

BookItem.propTypes = {
  bookID: PropTypes.number.isRequired,
  book: PropTypes.shape({
    author: PropTypes.string.isRequired,
    book_id: PropTypes.number.isRequired,
    cover: PropTypes.string.isRequired,
    isbn: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    published_at: PropTypes.string.isRequired,
  }),
  fetchBooks: PropTypes.func.isRequired,
};

BookItem.defaultProps = {
  book: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(BookItem);
