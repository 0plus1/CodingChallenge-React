import { LOAD_BOOKS } from "./actionTypes";

export function loadBooks(payload) {
    return {
        type: LOAD_BOOKS,
        payload: payload
    }
}
