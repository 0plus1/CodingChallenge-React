import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter, Route, Switch } from 'react-router';
import Book from '../../containers/Book';
import { findByTestAtrr, withRouter } from '../../../Utils';

jest.mock('react-redux', () => ({
  useSelector: () => ({
    books: [],
  }),
  useDispatch: () => jest.fn(),
}));

const setUp = () => withRouter(Book).childAt(1).childAt(0).dive();

describe('<Book />', () => {
  describe('renders', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it('without crashing', () => {
      const component = findByTestAtrr(wrapper, 'bookComponent');
      expect(component.length).toBe(1);
    });
  });
});
