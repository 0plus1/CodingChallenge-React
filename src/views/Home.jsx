import React from 'react';
import PropTypes from 'prop-types';

const HomeStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const Home = ({ match }) => (
  <div style={HomeStyle}>
    <h1>
      Welcome!
    </h1>
    {(match.params.testRouting) && (
      <p>
        {match.params.testRouting}
      </p>
    )}
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
