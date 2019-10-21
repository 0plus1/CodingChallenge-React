import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import BookCard from '../../components/BookCard';
import {
  fetchBookRequest,
} from '../../actions/book';

const Book = ({ bookItems = [], fetchBooks }) => {
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <StyledBook>
      <h1>Book Lists</h1>
      <div>
        {
          bookItems.map((book) => (
            <BookCard book={book} key={book.isbn} />
          ))
        }
      </div>
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
    max-width: 1024px;
    display: flex;
    flex-wrap: wrap;
  }
`;

const mapStateToProps = (state) => ({
  bookItems: state.book.items,
});

const mapDispatchToProps = (dispatch) => ({
  fetchBooks: () => {
    dispatch(fetchBookRequest());
  },
});

Book.propTypes = {
  bookItems: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string.isRequired,
    book_id: PropTypes.number.isRequired,
    cover: PropTypes.string.isRequired,
    isbn: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    published_at: PropTypes.string.isRequired,
  })).isRequired,
  fetchBooks: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);
