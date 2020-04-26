import getBooks from '../services/product';

export const requestBooks = () => ({
  type: 'REQUEST_BOOKS',
});

export const receiveBooks = books => ({
  type: 'RECEIVE_BOOKS',
  books,
});

export const requestBook = bookId => ({
  type: 'REQUEST_BOOK',
  bookId,
});

export const receiveBook = book => ({
  type: 'RECEIVE_BOOK',
  book,
});

const getBook = (bookId, bookArray) => {
  const output = bookArray.filter(curr => (parseInt(curr.book_id, 10) === parseInt(bookId, 10)));
  if (output.length > 0) {
    return output[0];
  }

  return [];
};

export const fetchBooks = bookId => (dispatch, getState) => {
  const state = getState();
  if (!state.books) {
    dispatch(requestBooks());
    return getBooks().then((books) => {
      dispatch(receiveBooks(books));

      if (bookId) {
        dispatch(requestBook(bookId));
        dispatch(receiveBook(getBook(bookId, books)));
      }
    });
  }

  if (bookId) {
    dispatch(requestBook(bookId));
    return dispatch(receiveBook(getBook(bookId, state.books)));
  }

  dispatch(requestBooks());
  return dispatch(receiveBooks(state.books));
};
