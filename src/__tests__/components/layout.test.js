import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter, Route, Switch } from 'react-router';
import { Provider } from 'react-redux';
import Home from '../../containers/Home';
import {
  findByTestAtrr, withRouter, testStore, withLayout,
} from '../../../Utils';
import Layout from '../../components/Layout';

describe('<Layout />', () => {
  describe('renders', () => {
    let wrapper;
    beforeEach(() => {
      const child = () => <></>;
      const LayoutHOC = Layout(child);
      wrapper = shallow(<LayoutHOC />);
    });

    it('without crashing', () => {
      const component = findByTestAtrr(wrapper, 'layoutComponent');
      expect(component.length).toBe(1);
    });
  });
});
