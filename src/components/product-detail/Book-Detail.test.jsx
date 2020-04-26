import React from 'react';
import { shallow } from 'enzyme';

import {
  BookDetailComponent, Author, Cover, ISBN, Publish, Title,
} from './Book-Detail';

describe('<BookList />', () => {
  it('renders', () => {
    const wrapper = shallow(<BookDetailComponent />);
    expect(wrapper).toBeTruthy();
  });

  it('renders book detail properly', () => {
    const book = {
      book_id: 1, name: 'Book Title', author: 'Author', cover: 'Cover',
    };
    const wrapper = shallow(<BookDetailComponent book={book} />);

    expect(wrapper.find(Author).length).toBe(1);
    expect(wrapper.find(Cover).length).toBe(1);
    expect(wrapper.find(Title).length).toBe(1);
    expect(wrapper.find(ISBN).length).toBe(1);
    expect(wrapper.find(Publish).length).toBe(1);
  });
});
