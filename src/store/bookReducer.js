import {
  FETCH_BOOKS_PENDING,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_ERROR
} from "./actions";

const initialState = {
  pending: false,
  books: [],
  error: null
};

export function booksReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_BOOKS_PENDING:
      return {
        ...state,
        pending: true
      };
    case FETCH_BOOKS_SUCCESS:
      console.log("reducer" + action.payload.books);
      return {
        ...state,
        pending: false,
        books: action.payload.books
      };

    case FETCH_BOOKS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      };
    default:
      return state;
  }
}

export const getbooks = state => state.books;
export const getbooksPending = state => state.pending;
export const getbooksError = state => state.error;
