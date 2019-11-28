import { combineReducers } from 'redux';
import books from './booksReducer';

const rootReducer = combineReducers({
  books,
});

export default rootReducer;
