import React from 'react'
import PropTypes from 'prop-types'

const Book = ({ name, author }) => (
    <div className="book">
        {name} {author}
    </div>
)

Book.propTypes = {
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
}

export default Book;
