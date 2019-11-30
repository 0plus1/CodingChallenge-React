import moxios from 'moxios';
import { testStore } from '../../../Utils';
import { fetchBooks } from '../../actions';

describe('fetchBooks action', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test('Store is updated correctly', () => {
    const expectedState = {
      books: [
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
      ],
    };
    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });

    return store.dispatch(fetchBooks()).then(() => {
      const newState = store.getState();
      expect(newState.books).toBe(expectedState);
    });
  });
});
