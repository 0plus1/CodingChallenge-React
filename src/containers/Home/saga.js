/* eslint-disable import/no-unresolved */
/**
 * Create Redux saga
 */

import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  API_BOOK,
} from 'utils/apis';
import {
  FETCH_ITEMS_REQUEST,
} from './actionTypes';
import {
  fetchItemsSuccess,
  fetchItemsFailed,
} from './actions';
import normalized from './schemas';

/**
 * Load book items
 */
function getBookService() {
  return new Promise((resolve, reject) => {
    axios.get(API_BOOK)
      .then(res => resolve(res.data))
      .catch(err => reject(err));
  });
}

/**
 * Get book items from API and update on reducer
 */
function* getBooks() {
  try {
    const books = yield call(getBookService);
    const allBooks = normalized({ books });
    yield put(fetchItemsSuccess(allBooks));
  } catch (err) {
    yield put(fetchItemsFailed(err));
  }
}

/**
 * Saga root
 */
export default function* root() {
  // User request books items
  yield takeLatest(FETCH_ITEMS_REQUEST, getBooks);
}
