const initialState = {};

export default function booksReducer(
    state = initialState,
    action
) {
    console.log('initalState', initialState)
    console.log('action type', action.type)
    console.log('action payload', action.payload)
    if (action.type === 'LOAD_BOOKS') {
        return {
            ...state,
            books: action.payload
        }
    }
    console.log('state in books reducer', state);
    return state;
}
