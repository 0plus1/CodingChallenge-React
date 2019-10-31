/* eslint-disable linebreak-style */
import { combineReducers } from 'redux';
import books from './bookReducer.tsx';

const rootReducer = combineReducers({
  books,
});

export default rootReducer;
