import React from 'react';
import { shallow, mount } from 'enzyme';
import BookResults from '../../components/BookResults';
import BookResult from '../../components/BookResult';

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
    shallow(<BookResults books={books} />);

    expect(<BookResults books={books}/>).toMatchSnapshot();
  });

  it('renders with correct n children', () => {
    const wrapper = mount(<BookResults books={books} />);
    const bookChild = wrapper.find(BookResult);
    expect(bookChild.length)
      .toEqual((books.length));
    bookChild.forEach((child, index) => {
      expect(child.props())
        .toMatchObject(books[index]);
    });
    wrapper.unmount();
  });
});
