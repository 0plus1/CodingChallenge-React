import axios from 'axios';
import camelcaseKeys from 'camelcase-keys';

const getBooks = () => axios.get('https://my-json-server.typicode.com/0plus1/CodingChallenge-react/books')
  .then((response) => {
    return {
      ...response,
      data: camelcaseKeys(response.data)
    };
  });


export default {
  getBooks,
}
