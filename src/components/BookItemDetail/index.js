/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Image from 'components/Image';
import * as bookItemTypes from 'types/bookItem';

function BookItem({
  bookId,
  bookCover,
  authorName,
  isbn,
  title,
  publishedAt,
}) {
  return (
    <div className="max-w-md rounded overflow-hidden shadow-lg" data-bookid={bookId}>
      <Image className="w-full" src={bookCover} alt={title} />
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
    </div>
  );
}

BookItem.propTypes = bookItemTypes.propTypes;
BookItem.defaultProps = bookItemTypes.defaultProps;

export default BookItem;
