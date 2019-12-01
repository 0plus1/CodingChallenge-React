import types from '../../actions/types';
import bookReducer from '../../reducers/bookReducer';

describe('Book Reducer', () => {
  it('Should return default state', () => {
    const newState = bookReducer(undefined, {});
    expect(newState).toEqual({});
  });

  it('Should return new state if receiving type', () => {
    const book = {
      book_id: 1,
      name: 'Becker West Arnoldo',
      isbn: '3181444340',
      published_at: '2000-01-01',
      author: 'Mrs. John Doe',
      cover: 'https://lorempixel.com/640/480/?82539',
    };
    const newState = bookReducer(undefined, {
      type: types.SET_BOOK,
      payload: book,
    });
    expect(newState).toEqual(book);
  });
});
