import React from 'react';
import { shallow } from 'enzyme';
import BookCard from '..';

describe('<BookCard />', () => {
  describe('renders', () => {
    it('without crashing', () => {
      const book = {
        author: 'Mrs. John Doe',
        book_id: 1,
        cover: 'https://lorempixel.com/640/480/?82539',
        isbn: '3181444340',
        name: 'Becker West Arnoldo',
        published_at: '2000-01-01',
      };

      shallow(<BookCard book={book} />);
    });
  });
});
