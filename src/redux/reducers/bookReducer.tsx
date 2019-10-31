import {
  GET_BOOKS_SUCCESS,
  GetBooksSuccessActionType
} from "../actions/actionTypes";
import initialState from "./initialState";

export default function bookReducer(
  state: Book[] = initialState.books,
  action: GetBooksSuccessActionType
): AppState.Books {
  switch (action.type) {
    case GET_BOOKS_SUCCESS:
      return action.books;
    default:
      return state;
  }
}
