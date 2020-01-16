import { AUTH_CHANGE } from '../types';

const initState = {
  open: false,
  reason: '',
};

export default function (state = initState, action) {
  switch (action.type) {
    case AUTH_CHANGE:
      return { ...Object.assign(initState, action.payload) };
    default:
      return state;
  }
}