/* eslint-disable import/prefer-default-export */
export function setPageState(pageState) {
  return {
    type: 'SET_PAGE_STATE',
    payload: {
      pageState,
    },
  };
}
