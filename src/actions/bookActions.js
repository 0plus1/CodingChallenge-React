import bookApi from '../api/books';
import { LOAD_BOOKS_SUCCESS, LOAD_BOOK_SUCCESS } from './types';

export function loadBooksSuccess(books) {
  return {
    type: LOAD_BOOKS_SUCCESS,
    books,
  };
}

export function loadBookSuccess(book) {
  return {
    type: LOAD_BOOK_SUCCESS,
    book,
  };
}

export function loadBooks() {
  return dispatch => bookApi.getBooks()
    .then((response) => {
      dispatch(loadBooksSuccess(response.data));
    })
    .catch((error) => {
      throw (error);
    });
}

export function loadBook(bookId) {
  return dispatch => bookApi.getBook(bookId)
    .then((book) => {
      dispatch(loadBookSuccess(book));
    })
    .catch((error) => {
      throw (error);
    });
}
