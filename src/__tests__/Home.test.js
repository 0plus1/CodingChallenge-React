import React from 'react';
import { shallow } from 'enzyme';

import Home from '../views/Home';

describe('Home', () => {
  it('should render correctly', () => {
    const home = shallow(<Home />);
    expect(home).toMatchSnapshot();
  });
});

