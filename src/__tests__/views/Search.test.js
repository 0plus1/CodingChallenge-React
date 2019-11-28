import React from 'react';
import Search from '../../views/Search';
import { shallowWithRouter } from '../../testHelper';
import mockAxios from 'axios';
import bookApi from '../../api/books';

describe('<Search />', () => {
  describe('renders', () => {
    it('without crashing', async () => {
      mockAxios.get.mockImplementationOnce(() => Promise.resolve({
          data: [
            {
              book_id: 2,
              name: 'Schuster Champlinborough',
              isbn: '1441614311',
              published_at: '1991-07-29',
              author: 'Prof. John Doe',
              cover: 'https:\/\/lorempixel.com\/640\/480\/?84662'
            }
          ]
        })
      );

      shallowWithRouter(<Search/>);
      expect(<Search/>)
        .toMatchSnapshot();

      await bookApi.getBooks();

      expect(mockAxios.get)
        .toHaveBeenCalledTimes(1);
    });
  });
});
