import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();
const store = mockStore({});
import Book from '../views/Book';

describe('<Home />', () => {
  describe('renders', () => {
    it('H1 exist in page', () => {
      shallow(
        <Provider store={store}>
           <Book />
        </Provider>,
      ).exists(<h1>This is book detail page</h1>);
    });
  });
});
