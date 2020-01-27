import axios from "axios";
function loadBooksSuccess(books) {
  return { type: "LOAD_BOOKS_SUCCESS", books };
}

export function loadBookByID(book) {
  return { type: "LOAD_BOOK_BYID", book };
}
export function loadBooks() {
  return function(dispatch) {
    axios
      .get(process.env.REACT_APP_API_URL)
      .then(res => {
        dispatch(loadBooksSuccess(res.data));
      })
      .catch(error => {
        throw error;
      });
  };
}
