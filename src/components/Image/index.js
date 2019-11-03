/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Img from 'react-image';
import PropTypes from 'prop-types';
import { defaultPhotoUrl } from 'utils/constants';

const Image = ({ src, ...props }) => (<Img src={[src, defaultPhotoUrl]} {...props} />);

Image.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Image;
