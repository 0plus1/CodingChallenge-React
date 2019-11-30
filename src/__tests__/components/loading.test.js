import React from 'react';
import { shallow } from 'enzyme';
import {
  findByTestAtrr,
} from '../../../Utils';
import Loading from '../../components/Loading';

describe('<Loading />', () => {
  describe('renders', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Loading />);
    });

    it('without crashing', () => {
      const component = findByTestAtrr(wrapper, 'loadingComponent');
      expect(component.length).toBe(1);
    });
  });
});
