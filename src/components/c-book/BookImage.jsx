import React from 'react';

function BookImage (book) {
  return (
    <img
      className="c-book__image"
      src={book.cover}
      width="400"
      height="300"
      alt={book.name}
    />
  );
}

export default BookImage;
