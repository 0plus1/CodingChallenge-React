import React from 'react';
import { shallow } from 'enzyme';
import {
  findByTestAtrr,
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
