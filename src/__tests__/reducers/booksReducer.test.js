import types from '../../actions/types';
import booksReducer from '../../reducers/booksReducer';

describe('Books Reducer', () => {
  it('Should return default state', () => {
    const newState = booksReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it('Should return new state if receiving type', () => {
    const books = [
      {
        book_id: 1,
        name: 'Becker West Arnoldo',
        isbn: '3181444340',
        published_at: '2000-01-01',
        author: 'Mrs. John Doe',
        cover: 'https://lorempixel.com/640/480/?82539',
      },
      {
        book_id: 2,
        name: 'Schuster Champlinborough',
        isbn: '1441614311',
        published_at: '1991-07-29',
        author: 'Prof. John Doe',
        cover: 'https://lorempixel.com/640/480/?84662',
      },
    ];
    const newState = booksReducer(undefined, {
      type: types.SET_BOOKS,
      payload: books,
    });
    expect(newState).toEqual(books);
  });
});
