import axios from 'axios';
import { getBooks, getBook } from '../../api/books';

describe('Testing Books API', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getBooks()', () => {
    beforeEach(() => {
      axios.get.mockImplementationOnce(async () => ({
        extra_field: 'data',
        data: [
          {
            book_id: 3,
            name: 'Okuneva MarianoVille',
            isbn: '0779284704',
            published_at: '2017-06-30',
            author: 'Prof. Jane Doe',
            cover: 'https://lorempixel.com/640/480/?28970',
          },
          {
            book_id: 4,
            name: 'Fahey LeonoraVille',
            isbn: '454120892X',
            published_at: '2001-02-18',
            author: 'Mr. John Doe',
            cover: 'https://lorempixel.com/640/480/?50593',
          },
        ],
      }));
    });

    it('should fetch right API endpoint and transform to camelCase object', async () => {
      const result = await getBooks();

      expect(axios.get)
        .toHaveBeenCalledTimes(1);
      expect(axios.get)
        .toHaveBeenCalledWith(process.env.REACT_APP_API_URL);

      // evaluate that only response.data has been transformed with expectations
      expect(result)
        .toContainKeys(['extra_field', 'data']);
      expect(result.data)
        .toHaveLength(2);
      expect(result.data[0])
        .toContainKeys(['bookId', 'publishedAt', 'isbn']);
      expect(result.data[0])
        .not
        .toContainKeys(['book_id', 'published_at']);
    });
  });

  describe('getBook()', () => {
    it('should not return any book with no bookId provided', async () => {
      const result = await getBook();
      expect(result)
        .toEqual(undefined);
    });

    it('should not return matched book if bookId existed in database', async () => {
      axios.get.mockImplementationOnce(async () => ({
        extra_field: 'data',
        data: [
          {
            book_id: 3,
            name: 'Okuneva MarianoVille',
            isbn: '0779284704',
            published_at: '2017-06-30',
            author: 'Prof. Jane Doe',
            cover: 'https://lorempixel.com/640/480/?28970',
          },
        ],
      }));

      const result = await getBook(3);
      expect(result)
        .toContainKeys(['bookId', 'publishedAt']);
      expect(result.bookId)
        .toEqual(3);
    });

    it('should not return undefined if bookId does not existed in database', async () => {
      const result = await getBook(2);
      expect(result)
        .toEqual(undefined);
    });
  });
});
