import React from 'react';
import { shallow } from 'enzyme';

import {
  BookListComponent as BL, Author, Cover, List, ListItem, Title,
} from './Book-List';

describe('<BookList />', () => {
  it('renders', () => {
    const wrapper = shallow(<BL />);
    expect(wrapper).toBeTruthy();
  });

  it('renders book list properly', () => {
    const books = [{
      book_id: 1, name: 'Book Title', author: 'Author', cover: 'Cover',
    }];
    const wrapper = shallow(<BL books={books} />);

    expect(wrapper.find(Author).length).toBe(1);
    expect(wrapper.find(List).length).toBe(1);
    expect(wrapper.find(Cover).length).toBe(1);
    expect(wrapper.find(ListItem).length).toBe(1);
    expect(wrapper.find(Title).length).toBe(1);
  });
});
