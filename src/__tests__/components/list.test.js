import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from '../../../Utils';
import List from '../../components/List';

describe('<List />', () => {
  describe('renders', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        books: [],
      };
      wrapper = shallow(<List {...props} />);
    });

    it('without crashing', () => {
      const component = findByTestAtrr(wrapper, 'listComponent');
      expect(component.length).toBe(1);
    });
  });
});
