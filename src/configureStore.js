/* eslint-disable import/no-unresolved */

/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducers from './reducers';
import rootSagas from './sagas';

export default function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(
    rootReducers,
    initialState,
    compose(...enhancers),
  );

  sagaMiddleware.run(rootSagas);

  return store;
}
