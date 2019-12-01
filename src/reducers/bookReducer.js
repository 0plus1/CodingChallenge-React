import types from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case types.SET_BOOK:
      return action.payload;
    default:
      return state;
  }
};
