/**
 * All actions
 */

import {
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILED,
} from './actionTypes';

export const fetchItemsRequest = () => ({
  type: FETCH_ITEMS_REQUEST,
});

export const fetchItemsSuccess = books => ({
  type: FETCH_ITEMS_SUCCESS,
  payload: books,
});

export const fetchItemsFailed = error => ({
  type: FETCH_ITEMS_FAILED,
  payload: new Error(error) || 'Something went wrong!',
});
