import React from 'react'
import PropTypes from 'prop-types'


const Book = ({ title, author }) => (
    <div>
        {title} {author}
    </div>
)

Book.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
}

export default Book;
