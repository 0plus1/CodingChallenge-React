import { LOAD_BOOKS } from "../actions/actionTypes";

const initialState = {};

export default function booksReducer(
    state = initialState,
    action
) {
      if (action.type === LOAD_BOOKS) {
        return {
            ...state,
            ...action.payload
        }
    }
    return state;
}
