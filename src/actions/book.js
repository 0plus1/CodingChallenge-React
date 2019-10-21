export function fetchBookRequest() {
  return {
    type: 'FETCH_BOOK_REQUEST',
  };
}

export function fetchBookSuccess(data) {
  return {
    type: 'FETCH_BOOK_SUCCESS',
    payload: {
      books: data,
    },
  };
}

export function fetchBookFailure() {
  return {
    type: 'FETCH_BOOK_FAILURE',
  };
}
