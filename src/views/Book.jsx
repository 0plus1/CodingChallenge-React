import React from 'react';
import PropTypes from 'prop-types';

const ColStyle = {
  border: 'solid 1px',
  padding: '10px',
};

const Book = ({ book_id, name, isbn, published_at, author, cover }) => {  
  return <tr key={book_id}>
    <td style={ColStyle}>{book_id}</td>
    <td style={ColStyle}>{name}</td>
    <td style={ColStyle}>{isbn}</td>
    <td style={ColStyle}>{published_at}</td>
    <td style={ColStyle}>{author}</td>
    <td style={ColStyle}><a href={cover} rel='noopener noreferrer' target='_blank'>{cover}</a></td>
  </tr>
};

Book.propTypes = {
  book_id: PropTypes.number,
  name: PropTypes.string,
  isbn: PropTypes.string,
  published_at: PropTypes.string,
  author: PropTypes.string,
  cover: PropTypes.string
};

export default Book;
