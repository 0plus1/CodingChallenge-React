import PropTypes from 'prop-types';

export const propTypes = {
  bookId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bookCover: PropTypes.string,
  authorName: PropTypes.string,
  isbn: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  publishedAt: PropTypes.string,
};

export const defaultProps = {
  bookId: null,
  bookCover: null,
  authorName: null,
  isbn: null,
  title: null,
  publishedAt: null,
};
