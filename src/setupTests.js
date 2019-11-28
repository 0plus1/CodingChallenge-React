import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import { createSerializer } from 'enzyme-to-json';

configure({ adapter: new Adapter() });

/* eslint-disable-next-line no-undef */
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));
