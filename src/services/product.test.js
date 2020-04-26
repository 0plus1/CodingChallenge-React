import axios from 'axios';
import dotenv from 'dotenv';

import { getBooks } from './product';

jest.mock('axios');

dotenv.config();

describe('Services', () => {
  describe('getBooks', () => {
    it('should return something', () => {
      const id = Math.floor(Math.random() * 10);
      const books = [
        {
          book_id: id,
          name: 'Becker West Arnoldo',
          isbn: '3181444340',
          published_at: '2000-01-01',
          author: 'Mrs. John Doe',
          cover: 'https://lorempixel.com/640/480/?82539',
        },
      ];

      axios.get.mockImplementation(() => Promise.resolve({ data: books }));

      return expect(getBooks()).resolves.toEqual(books);
    });
  });
});
