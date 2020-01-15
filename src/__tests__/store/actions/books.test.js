import { loadBooks } from '../../../store/actions/books';

describe('Actions', () => {
    it('the loadBooks action has the correct type', () => {
        const payload = {
            "books": "book1"
        };

        const books = loadBooks(payload);
        expect(books).toEqual({ type: "LOAD_BOOKS", payload: { "books": "book1" } });
    });

});
