/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-unresolved */
/**
 * Create Selectors
 */

// Get a book
export const makeSelectBook = (allBooks, bookId) => {
  if (allBooks.length === 0) return [];

  return allBooks.filter(book => book.id === bookId);
};

// Get Related books
export const makeRelatedBooks = (allBooks, bookId) => {
  if (allBooks.length === 0) return [];

  return allBooks
    .filter(book => book.id !== bookId)
    .slice(0, 2);
};
