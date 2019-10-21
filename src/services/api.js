import axios from 'axios';

// Books api
const bookRequest = axios.create({
  baseURL: 'https://my-json-server.typicode.com/0plus1/CodingChallenge-react/books',
});

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function parseJSON(response) {
  return response.data;
}

export default {
  apiBookItems: () => bookRequest.get('/').then(checkStatus).then(parseJSON),
};
