/* eslint-disable import/newline-after-import, import/no-unresolved */
/**
 * Home Reducers
 */

import defaultState from 'utils/defaultState';
import {
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS,
} from './actionTypes';

export const initialState = defaultState;

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case FETCH_ITEMS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isFetched: true,
        items: action.payload,
      });
    default:
      return state;
  }
};
