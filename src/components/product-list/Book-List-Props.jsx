import PropTypes from 'prop-types';

export const BookComponentPropTypes = {
  book_id: PropTypes.number,
  name: PropTypes.string,
  isbn: PropTypes.string,
  published_at: PropTypes.string,
  author: PropTypes.string,
  cover: PropTypes.string,
};

export const BookListComponentPropTypes = {
  books: PropTypes.arrayOf(PropTypes.shape(BookComponentPropTypes)),
};
