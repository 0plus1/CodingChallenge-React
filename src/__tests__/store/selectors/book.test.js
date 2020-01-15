import { selectBooks } from '../../../store/selectors/book'

const baseStore = {
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
}

describe('Book selectors', () => {
    describe('selectBooks', () => {
        it('returns books from state', () => {
            const books = selectBooks(baseStore);
            expect(books).toEqual(baseStore.books);
        })

    });
});

