/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Img from 'react-image';
import PropTypes from 'prop-types';

const Image = ({ src, ...props }) => (<Img src={[src, 'https://via.placeholder.com/200']} {...props} />);

Image.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Image;
