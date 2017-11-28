import React from 'react';
import Book from '../components/c-book/Book';

const BookView = () => (
  <div className="l-container">
    <div className="l-row">
      <header className="c-header">
        <h1>0Plus1 Coding Challenge</h1>
        <h2></h2>
      </header>
    </div>
    <div className="l-row">
      <Book />
    </div>
  </div>
);

export default BookView;
