import { LOAD_BOOK_SUCCESS, LOAD_BOOKS_SUCCESS } from '../actions/types';
import initialState from './initialState';

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.books,
      };
    case LOAD_BOOK_SUCCESS:
      return {
        ...state,
        book: action.book,
      };
    default:
      return state;
  }
}
