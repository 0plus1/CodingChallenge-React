import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from '../../../Utils';
import Item from '../../components/Item';

describe('<Item />', () => {
  describe('renders', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Item book={{}} />);
    });

    it('without crashing', () => {
      const component = findByTestAtrr(wrapper, 'itemComponent');
      expect(component.length).toBe(1);
    });
  });
});
