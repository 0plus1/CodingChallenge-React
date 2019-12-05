import {
  fetchbooksPending,
  fetchbooksSuccess,
  fetchbooksError
} from "../store/actions";

import axios from "axios";

function fetchbooks() {
  return dispatch => {
    dispatch(fetchbooksPending());
    axios
      .get(
        "https://my-json-server.typicode.com/0plus1/CodingChallenge-react/books"
      )

      .then(res => res.data)
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        console.log(res);
        dispatch(fetchbooksSuccess(res));
        return res;
      })
      .catch(error => {
        dispatch(fetchbooksError(error));
      });
  };
}

export default fetchbooks;
