import React from 'react';
import Header from '../components/c-header/Header';
import BooksGrid from '../components/c-book-grid/BooksGrid';

const Home = () => (
  <div className="l-container">
    <div className="l-row">
      <Header/>
    </div>
    <div className="l-row">
      <BooksGrid/>
    </div>
  </div>
);

export default Home;
