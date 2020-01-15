import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

configure({ adapter: new Adapter() });
