/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Image from 'components/Image';
import * as bookItemTypes from 'types/bookItem';

function BookItemDetail({
  bookId,
  bookCover,
  authorName,
  isbn,
  title,
  publishedAt,
}) {
  return (
    <div className="md:flex bg-white rounded-lg p-6">
      <Image className="h-16 w-16 md:h-24 md:w-24 rounded mx-auto md:mx-0 md:mr-6" src={bookCover} alt="" />
      <div className="text-center md:text-left">
        <h2 className="text-lg">{authorName}</h2>
        <div className="text-purple-500">{title}</div>
        <div className="text-gray-600">{`Published At: ${publishedAt}`}</div>
        <div className="text-gray-600">{`Author name: ${authorName}`}</div>
        <div className="text-gray-600">{`ISBN: ${isbn}`}</div>
        <div className="py-4">
          <a
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            href={`/book/${bookId}`}
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}

BookItemDetail.propTypes = bookItemTypes.propTypes;
BookItemDetail.defaultProps = bookItemTypes.defaultProps;

export default BookItemDetail;
