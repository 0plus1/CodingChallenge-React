import { combineReducers, createStore } from 'redux';

const initialBooksState = {
  books: []
}

const booksReducer = (state = initialBooksState, action) => {
  switch(action.type) {
  case 'BOOKS_SUCCESS':
    return Object.assign({}, state, { books: action.books });
  }  return state;
}

const singleBookReducer = (state = {}, action) => {
  return state;
}

const reducers = combineReducers({
  booksState: booksReducer,
  singleBookState: singleBookReducer
});

const store = createStore(reducers);

export default store;
