import { createStore, applyMiddleware } from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(logger, thunk, reduxImmutableStateInvariant())
  );
}
