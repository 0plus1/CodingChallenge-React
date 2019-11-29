import axios from 'axios';
import camelcaseKeys from 'camelcase-keys';

const apiRoute = process.env.REACT_APP_API_URL;
const normaliseResponse = response => ({
  ...response,
  data: camelcaseKeys(response.data),
});

const getBooks = () => axios.get(apiRoute)
  .then(response => normaliseResponse(response));

const getBook = bookId => axios.get(`${apiRoute}?book_id=${bookId}`)
  .then(response => normaliseResponse(response))
  .then(response => response.data[0]);

export {
  getBooks,
  getBook,
};
