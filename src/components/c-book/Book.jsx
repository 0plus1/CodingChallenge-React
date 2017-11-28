import React from 'react';
import BookImage from './BookImage';
import BookDetails from './BookDetails';

function Book (book) {
  return (
    <article className="c-book">
      <div className="c-book__image">
        <BookImage {...book} />
      </div>
      <div className="c-book__details">
        <BookDetails {...book} />
      </div>
    </article>
  );
}

export default Book;
