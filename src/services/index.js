import axios from 'axios';
import bookServices from './bookServices';

axios.defaults.baseURL = 'https://my-json-server.typicode.com/';

export default {
  bookServices,
};