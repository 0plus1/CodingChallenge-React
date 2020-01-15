import React from 'react'
import PropTypes from 'prop-types'

const bookStyle = {
    border: '1px solid #000',
    padding: '10px'
};

const Book = ({ name, author }) => (
    <div className="book" style={bookStyle}>
        <p>Title: {name}</p>
        <p>Author: {author}</p>
    </div>
)

Book.propTypes = {
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
}

export default Book;
