import React from 'react';
import { shallow } from 'enzyme';

import Book from '../views/Book';
import expectExport from 'expect';

describe('<Book />', () => {
  describe('renders', () => {
    it('without crashing', () => {
      const component = shallow(<Book
        book_id={1}
        name='Becker West Arnoldo'
        isbn='3181444340'
        published_at='2000-01-01'
        author='Mrs. John Doe'
        cover='https=//lorempixel.com/640/480/?82539'
       />);
       expectExport(component).toBeDefined();              
       expectExport(component.find('td').length).toBe(6);
    });
  });
});
