import React from 'react';
import { shallow } from 'enzyme';

import Home from '../views/Home';

describe('<Home />', () => {
  describe('renders', () => {
    it('without crashing', () => {
      const wrapper = shallow(<Home />);
      expect(wrapper).toBeTruthy();
    });
  });
});
