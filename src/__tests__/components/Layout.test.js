import React from 'react';
import Layout from '../../components/Layout';
import { mountWithRouter, renderWithRouter, shallowWithRouter } from '../../testHelper';

describe('<Layout />', () => {
  describe('renders', () => {
    it('without crashing', () => {
      shallowWithRouter(<Layout />);
      expect(<Layout />).toMatchSnapshot();
    });

    it('with child components', () => {
      const child = () => <div className="child">test</div>;
      const TestHOC = Layout(child);
      const wrapper = mountWithRouter(<TestHOC />);
      expect(wrapper.find(child)).toHaveLength(1);
      wrapper.unmount(); // enzyme dom cleanup

      const renderer = renderWithRouter(<TestHOC />);
      expect(renderer.find('div.child')).toHaveLength(1);
    });
  });
});
