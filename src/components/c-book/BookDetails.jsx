import React from 'react';

function BookDetails (book) {
  return (
    <ul className="c-details">
      <li>
        <span className="c-details__label">Title: &nbsp;</span>
        {book.name}
      </li>
      <li>
        <span className="c-details__label">Author: &nbsp;</span>
        {book.author}
      </li>
      <li>
        <span className="c-details__label">Published: &nbsp;</span>
        {book.published_at}
      </li>
      <li>
        <span className="c-details__label">ISBN: &nbsp;</span>
        {book.isbn}
      </li>
    </ul>
  );
}

export default BookDetails;
