import { testStore } from '../../../Utils';
import action from '../../actions';

describe('setBook action', () => {
  test('Store is updated correctly', () => {
    const expectedState = {
      book_id: 1,
      name: 'Becker West Arnoldo',
      isbn: '3181444340',
      published_at: '2000-01-01',
      author: 'Mrs. John Doe',
      cover: 'https://lorempixel.com/640/480/?82539',
    };
    const store = testStore();
    store.dispatch(action.setBook(expectedState));
    const newState = store.getState();
    expect(newState.book).toBe(expectedState);
  });
});
