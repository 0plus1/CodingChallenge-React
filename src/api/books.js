import axios from 'axios';
import camelcaseKeys from 'camelcase-keys';

const getBooks = () => axios.get(process.env.REACT_APP_API_URL)
  .then(response => ({
    ...response,
    data: camelcaseKeys(response.data),
  }));

const getBook = (bookId) => getBooks().then(({data}) => {
  return data.find(book => book.bookId === parseInt(bookId, 10));
});

export default {
  getBooks,
  getBook,
};
