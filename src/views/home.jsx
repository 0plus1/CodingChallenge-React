import React from 'react';
import BooksGrid from '../components/BooksGrid';

const Home = () => (
  <div className="l-container">
    <div className="l-row">
      <h1>Welcome Reader!</h1>
    </div>
    <div className="l-row">
        <BooksGrid/>
    </div>
  </div>
);

export default Home;
