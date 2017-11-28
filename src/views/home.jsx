import React from 'react';

const Home = () => (
  <div className="l-container">
    <div className="l-row">
      <h1>Welcome Ian!</h1>
    </div>
    <div className="l-row">
      <ul className="l-book-grid">
        <li className="l-book-grid__item c-book">
          <img
            className="c-book__image"
            src="https://lorempixel.com/640/480/?82539"
            width="400"
            height="300"
            alt="Becker West Arnoldo"
          />
          <div className="c-book__details">
            <ul className="c-details">
              <li className="c-details__title">Title: Becker West Arnoldo</li>
              <li className="c-details__author">Author: Mrs. John Doe</li>
              <li className="c-details__date-published">Published: 2000-01-01</li>
              <li className="c-details__isbn">ISBN: 3181444340</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
);

export default Home;
