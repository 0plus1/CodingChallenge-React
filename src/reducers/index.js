import { combineReducers } from 'redux';
import app from './app';
import book from './book';

export default combineReducers({
  app,
  book,
});
