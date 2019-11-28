import { LOAD_BOOKS_SUCCESS } from '../actions/types';
import initialState from './initialState';

export default function bookReducer(state = initialState.books, action) {
  switch (action.type) {
    case LOAD_BOOKS_SUCCESS:
      return action.books;
    default:
      return state;
  }
}
