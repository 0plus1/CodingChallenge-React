import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from '../../../Utils';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
  describe('renders', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Footer />);
    });

    it('without crashing', () => {
      const component = findByTestAtrr(wrapper, 'footerComponent');
      expect(component.length).toBe(1);
    });
  });
});
