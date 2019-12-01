import axios from 'axios';
import types from './types';

const fetchBooks = () => async (dispatch) => {
  await axios
    .get(process.env.REACT_APP_API_URL)
    .then((res) => {
      dispatch({
        type: types.SET_BOOKS,
        payload: res.data,
      });
    })
    .catch(err => console.error(err));
};

const setBook = book => (dispatch) => {
  dispatch({
    type: types.SET_BOOK,
    payload: book,
  });
};

export default {
  fetchBooks,
  setBook,
};
