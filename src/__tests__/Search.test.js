import React from 'react';
import { shallow } from 'enzyme';
import Search from '../views/Search';

describe('<Home />', () => {
  describe('renders', () => {
    it('without crashing', () => {
      const route = { params: { testRouting: '' } };
      shallow(<Search match={route} />);

      expect(<Search />).toMatchSnapshot();
    });
  });
});
