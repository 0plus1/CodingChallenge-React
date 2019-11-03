/**
 * Create Selectors
 */

import { createSelector } from 'reselect';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import toArray from 'lodash/toArray';
import { initialState } from './reducer';

// Select reducer domain
const selectHome = state => state.home || initialState;

// Get data
const getEntities = (state, keyItem) => get(state, `items.entities[${keyItem}]`);

// Get all books
export const makeSelectAllBooks = () => createSelector(
  selectHome,
  (state) => {
    const items = getEntities(state, 'bookItems');
    if (isEmpty(items)) return [];
    return toArray(items);
  },
);

export default selectHome;
