import bookApi from '../api/books';
import { LOAD_BOOKS_SUCCESS } from './types';

export function loadBooks() {
  return function(dispatch) {
    return bookApi.getBooks().then(response => {
      dispatch(loadBooksSuccess(response.data));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadBooksSuccess(books) {
  return {type: LOAD_BOOKS_SUCCESS, books};
}
