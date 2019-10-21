const defaultState = {
  pageState: 'loaded', // loading, loaded
};

let newState;

export default (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_PAGE_STATE':
      newState = { ...state };
      newState.pageState = payload.pageState;
      return {
        ...state,
        ...newState,
      };
    default:
      return state;
  }
};
