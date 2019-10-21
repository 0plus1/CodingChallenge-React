import { fork, all } from 'redux-saga/effects';
import bookSaga from './book';

export default function* () {
  yield all([
    fork(bookSaga),
  ]);
}
