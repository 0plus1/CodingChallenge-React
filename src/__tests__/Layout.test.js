import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Layout from '../views/Layout';

describe('<Layout />', () => {
  describe('renders', () => {

    it('without crashing', () => {
      shallow(<Layout />);
      expect(<Layout />).toMatchSnapshot();
    });

    it('with child components', () => {
      const child = () => <div className="child">test</div>;
      const TestHOC = Layout(child);
      const wrapper = mount(<TestHOC />);
      expect(wrapper.find(child)).toHaveLength(1);
      wrapper.unmount(); // enzyme dom cleanup

      const renderer = render(<TestHOC />);
      expect(renderer.find('div.child')).toHaveLength(1);
    });
  });
});
