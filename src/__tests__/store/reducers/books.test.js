import booksReducer from '../../../store/reducers/books';
import { loadBooks } from '../../../store/actions/books';

const payload = {
    "books": [
        {
            "book_id": 1,
            "name": "Becker West Arnoldo",
            "isbn": "3181444340",
            "published_at": "2000-01-01",
            "author": "Mrs. John Doe",
            "cover": "https:\/\/lorempixel.com\/640\/480\/?82539"
        },
        {
            "book_id": 2,
            "name": "Schuster Champlinborough",
            "isbn": "1441614311",
            "published_at": "1991-07-29",
            "author": "Prof. John Doe",
            "cover": "https:\/\/lorempixel.com\/640\/480\/?84662"
        }
    ]
};

const emptyState = {};

describe('Books reducer', () => {
    it('reduces LOAD_BOOKS action', () => {
        const data = booksReducer(undefined, loadBooks(payload));
        expect(data.books).toEqual(payload.books);
    });

    it('reduces the correct state for other actions', () => {
        const data = booksReducer(undefined, { type: "FAKE_TYPE", payload: "" });
        expect(data).toEqual(emptyState);
    });
});

