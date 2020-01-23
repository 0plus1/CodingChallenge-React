export default function booksReducer(state = [], action) {
  switch (action.type) {
    case "LOAD_BOOKS_SUCCESS":
      return action.books;
    case "LOAD_BOOK_BYID":
      return action.book.book_id;
    default:
      return state;
  }
}
