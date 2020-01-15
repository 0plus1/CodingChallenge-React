import { LOAD_BOOKS } from "./actionTypes";

export function loadBooks(payload) {
    console.log('payload in loadbooks', payload)
    return {
        type: LOAD_BOOKS,
        books: payload
    }
}
