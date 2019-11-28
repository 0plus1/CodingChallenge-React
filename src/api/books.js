import axios from 'axios';
import camelcaseKeys from 'camelcase-keys';

const getBooks = () => axios.get(process.env.REACT_APP_API_URL)
  .then(response => ({
    ...response,
    data: camelcaseKeys(response.data),
  }));

export default {
  getBooks,
};
