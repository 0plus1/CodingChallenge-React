const books = (state = [], action) => {
  switch (action.type) {
    case 'REQUEST_BOOKS':
      return {
        ...state,
        isFetching: true,
      };
    case 'RECEIVE_BOOKS':
      return {
        ...state,
        isFetching: false,
        books: action.books,
      };
    case 'REQUEST_BOOK':
      return { ...state, isFetching: true };
    case 'RECEIVE_BOOK':
      return { ...state, isFetching: false, book: action.book };
    default:
      return state;
  }
};

export default books;
