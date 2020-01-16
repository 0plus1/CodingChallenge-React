import { combineReducers } from 'redux';
import validation from './validation';
import auth from './auth';


export default combineReducers({
  validation,
  auth,
});
