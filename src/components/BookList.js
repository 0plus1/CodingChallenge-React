import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'
import axios from 'axios';
import createStore from '../store/createStore';
import { loadBooks } from '../store/actions/books';

const BookList = ({ books }) => {

    return (
        <p>Hi</p>
    )
};

export default BookList;
