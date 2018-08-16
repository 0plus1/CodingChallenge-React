import React from 'react';
import 'sanitize.css';
import './home.css';

const HomeStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const Home = () => (
  <div style={HomeStyle}>
    <h1>
    Welcome!
    </h1>
  </div>
);

export default Home;
