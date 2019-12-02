import Axios from 'axios';
import { createSelector } from 'reselect';
import * as _ from 'ramda';

export function LoadAllBooks() {
    return (dispatch) => {
        dispatch({type: 'LOAD_ALL_STARTED'});
        Axios.get('https://my-json-server.typicode.com/0plus1/CodingChallenge-react/books')
            .then(resp => {
                dispatch({type: 'LOAD_ALL_FINISHED', payload: resp.data});
            });
    }
}


export const reducer = (state, action) => {
    switch(action.type) {
        case 'LOAD_ALL_STARTED':
            return {
                ...state,
                loading: true
            };
        case 'LOAD_ALL_FINISHED':
            return {
                ...state,
                loading: false,
                books: action.payload
            }
        case 'SELECT_SINGLE':
            return {
                ...state,
                single: action.payload
            }
        default:
            return state;
    }
}


const booksSelector = (state) => state ? state.books : [];
const singleSelector = (state) => state ? parseInt(state.single) : -1;
const singleBook = createSelector(
    booksSelector,
    singleSelector,
    (books, id) => {
        if (!books || books.length === 0 || id === -1) return undefined;
        return _.find(b => b.book_id === id, books);
    }
)
export const Selectors = {
    booksSelector,
    singleBook,
    singleSelector
};