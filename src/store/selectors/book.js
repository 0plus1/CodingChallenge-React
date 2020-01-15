import { createSelector } from 'reselect';

export function getBooks(state) {
    return state.books;
}

export const selectBooks = createSelector([getBooks], (book) => book);
