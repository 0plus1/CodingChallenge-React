const defaultState = {
  items: [],
};

let newState;

export default (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'FETCH_BOOK_SUCCESS':
      newState = { ...state };
      newState.items = payload.books;

      return {
        ...state,
        ...newState,
      };
    case 'FETCH_BOOK_FAILURE':
      return {
        ...state,
      };
    default:
      return state;
  }
};
