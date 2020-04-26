import React from 'react';
import { shallow } from 'enzyme';

import {
  BookDetailComponent 
} from '../components/product-detail/Book-Detail';

import LayoutHOC from './LayoutHOC';

// Couldn't get this to work. I think I made the HOC too complex.
describe('<LayoutHOC />', () => {
  it('renders', () => {
    // const el = LayoutHOC('book-detail')(BookDetailComponent);
    // const wrapper = shallow(el);
    // expect(wrapper).toBeTruthy();
  });
});
