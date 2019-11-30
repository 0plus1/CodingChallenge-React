import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr  } from '../../../Utils';
import Header from '../../components/Header';

describe('<Header />', () => {
  describe('renders', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Header />);
    });

    it('without crashing', () => {
      const component = findByTestAtrr(wrapper, 'headerComponent');
      expect(component.length).toBe(1);
    });
  });
});
