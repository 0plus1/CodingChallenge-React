export const FETCH_BOOKS_PENDING = "FETCH_BOOKS_PENDING";
export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS";
export const FETCH_BOOKS_ERROR = "FETCH_BOOKS_ERROR";

export const fetchbooksPending = () => ({
  type: FETCH_BOOKS_PENDING
});

export const fetchbooksSuccess = books => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: { books }
});

export const fetchbooksError = error => ({
  type: FETCH_BOOKS_ERROR,
  payload: { error }
});
