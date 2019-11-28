import React from 'react';
import { shallow } from 'enzyme';
import Home from '../views/Home';

describe('<Home />', () => {
  describe('renders', () => {
    it('without crashing', () => {
      const route = { params: { testRouting: '' } };
      shallow(<Home match={route} />);
    });
  });
});
