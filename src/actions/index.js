import axios from 'axios';
import types from './types';

export const fetchBooks = () => async (dispatch) => {
  await axios
    .get(process.env.REACT_APP_API_URL)
    .then((res) => {
      dispatch({
        type: types.GET_BOOKS,
        payload: res.data,
      });
    })
    .catch((err) => {
      // console.log(err);
    });
};
