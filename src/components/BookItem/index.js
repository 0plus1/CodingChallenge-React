/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function BookItem({
  bookId,
  bookCover,
  authorName,
  isbn,
  title,
  publishedAt,
}) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg" data-bookid={bookId}>
      <img className="w-full" src={bookCover} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="text-gray-700 text-base">
          <ul>
            <li>{`Published At: ${publishedAt}`}</li>
            <li>{`Author name: ${authorName}`}</li>
            <li>{`ISBN: ${isbn}`}</li>
          </ul>
        </div>
      </div>
      <div className="px-6 py-4">
        <Link
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          to="/"
        >
          Button
        </Link>
      </div>
    </div>
  );
}

BookItem.propTypes = {
  bookId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bookCover: PropTypes.string,
  authorName: PropTypes.string,
  isbn: PropTypes.number,
  title: PropTypes.string,
  publishedAt: PropTypes.string,
};

BookItem.defaultProps = {
  bookId: null,
  bookCover: null,
  authorName: null,
  isbn: null,
  title: null,
  publishedAt: null,
};

export default BookItem;
