import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter, Route, Switch } from 'react-router';
import { Provider } from 'react-redux';
import Home from '../../containers/Home';
import {
  findByTestAtrr, withRouter, testStore, withLayout,
} from '../../../Utils';

jest.mock('react-redux', () => ({
  useSelector: () => ({
    books: [],
  }),
  useDispatch: () => jest.fn(),
}));

const setUp = () => shallow(<Home />).childAt(1).dive();

describe('<Home />', () => {
  describe('renders', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it('without crashing', () => {
      const component = findByTestAtrr(wrapper, 'homeComponent');
      expect(component.length).toBe(1);
    });
  });
});
