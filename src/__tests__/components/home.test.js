import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../containers/Home';
import { findByTestAtrr } from '../../../Utils';

jest.mock('react-redux', () => ({
  useSelector: () => ([]),
  useDispatch: () => jest.fn(),
}));

const setUp = () => shallow(<Home />).childAt(1).childAt(0).dive();

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
