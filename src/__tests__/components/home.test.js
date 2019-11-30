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
    books: [
      {
        book_id: 1,
        name: 'Becker West Arnoldo',
        isbn: '3181444340',
        published_at: '2000-01-01',
        author: 'Mrs. John Doe',
        cover: 'https:\/\/lorempixel.com\/640\/480\/?82539',
      },
      {
        book_id: 2,
        name: 'Schuster Champlinborough',
        isbn: '1441614311',
        published_at: '1991-07-29',
        author: 'Prof. John Doe',
        cover: 'https:\/\/lorempixel.com\/640\/480\/?84662',
      },
    ],
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
