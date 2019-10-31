export const GET_BOOKS_SUCCESS = "GET_BOOKS_SUCCESS";

interface GetBooksSuccessAction {
  type: typeof GET_BOOKS_SUCCESS;
  books: Book[];
}

export type GetBooksSuccessActionType = GetBooksSuccessAction
