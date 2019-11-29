import React from 'react';
import { Card } from '@material-ui/core';
import BookResult from '../../components/BookResult';
import { mountWithRouter } from '../../testHelper';

const book = {
  bookId: 1,
  isbn: '23421423',
  name: 'test book',
  publishedAt: '2019-12-23',
  cover: '/path/to/image',
  author: 'I wrote it',
};

describe('<BookResult />', () => {
  it('renders without crashing', () => {
    const wrapper = mountWithRouter(<BookResult {...book} />);
    expect(wrapper)
      .toMatchSnapshot();
  });

  it('renders aria label with name', () => {
    const wrapper = mountWithRouter(<BookResult {...book} />);

    // confirm that the aria-label is set with the book name
    expect(wrapper.find(Card)
      .getDOMNode()
      .attributes
      .getNamedItem('aria-label').nodeValue)
      .toEqual(book.name);
    wrapper.unmount();
  });
});
