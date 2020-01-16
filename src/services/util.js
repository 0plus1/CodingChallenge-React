import store from '../store';
import {AUTH_CHANGE} from '../store/types';

// Placeholder - see what is the best way to handle axios error
// Refer to https://github.com/axios/axios#handling-errors
const handleError = (error) => {
  const {response} = error;
  if (response) {
    const {data: innerError} = response;
    if (response.status === 401 && innerError && /jwt expire/.test(innerError.message)) {
      return store.dispatch({
        type: AUTH_CHANGE,
        payload: {
          open: true,
          reason: innerError.message,
        },
      });
    } else {
      return Promise.reject({code: response.status, text: response.statusText, msg: innerError.message || error.message});
    }
  }
  throw error;
};

export default {handleError};