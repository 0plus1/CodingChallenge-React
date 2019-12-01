import { combineReducers } from 'redux';
import books from './booksReducer';
import book from './bookReducer';

export default combineReducers({
  books,
  book,
});
