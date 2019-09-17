import React from 'react';
import PropTypes from 'prop-types';
import Books from '../components/books';

require('../index.scss');
require('../components/books/books.scss');

const HomeStyle = {
  display: 'block'
};

const Home = ({ match }) => (
  <div style={HomeStyle}>
      <header>
        <h1>
          Books listing
        </h1>
      </header>
      <section className="main">
            <Books />
      </section>
  </div>
);

Home.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      testRouting: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Home;
