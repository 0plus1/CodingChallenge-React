import React from 'react';
import BookResults from '../../components/BookResults';
import BookResult from '../../components/BookResult';
import { mountWithRouter, shallowWithRouter} from '../../testHelper';
import mockAxios from 'axios';
import bookApi from '../../api/books';

const books = [
  {
    bookId: 1,
    name: 'Becker West Arnoldo',
    isbn: '3181444340',
    publishedAt: '2000-01-01',
    author: 'Mrs. John Doe',
    cover: 'https://lorempixel.com/640/480/?82539',
  },
  {
    bookId: 2,
    name: 'Schuster Champlinborough',
    isbn: '1441614311',
    publishedAt: '1991-07-29',
    author: 'Prof. John Doe',
    cover: 'https://lorempixel.com/640/480/?84662',
  },
];

describe('<BookResults />', () => {
  it('renders without crashing', () => {
    shallowWithRouter(<BookResults books={books} />);

    expect(<BookResults books={books} />)
      .toMatchSnapshot();
  });

  it('renders with correct n children', async () => {
    const wrapper = mountWithRouter(<BookResults books={books} />);
    const bookChild = wrapper.find(BookResult);

    mockAxios.get.mockImplementationOnce(() => Promise.resolve({
        data: books
      })
    );

    await bookApi.getBooks();

    expect(bookChild.length)
      .toEqual((books.length));
    bookChild.forEach((child, index) => {
      expect(child.props())
        .toMatchObject(books[index]);
    });
    wrapper.unmount();
  });
});
