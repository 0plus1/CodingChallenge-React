import {
  takeEvery, put, call, fork,
} from 'redux-saga/effects';
import api from '../services/api';
import {
  setPageState,
  fetchBookSuccess,
  fetchBookFailure,
} from '../actions';

export function* fetchBook() {
  yield put(setPageState('loading'));
  try {
    const retrievedBooks = yield call(api.apiBookItems);
    yield put(fetchBookSuccess(retrievedBooks));
  } catch (e) {
    yield put(fetchBookFailure());
  }
  yield put(setPageState('loaded'));
}

function* watchFetchBookRequest() {
  yield takeEvery('FETCH_BOOK_REQUEST', fetchBook);
}

export default function* () {
  yield fork(watchFetchBookRequest);
}
