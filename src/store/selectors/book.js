import { createSelector } from 'reselect';

export function getBooks(state) {
    console.log('state', state);
    return state.books;
}

export const selectBooks = createSelector([getBooks], (book) => book);
