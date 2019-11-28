import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components/serializer';
import { createSerializer } from 'enzyme-to-json';

configure({ adapter: new Adapter() });

/* eslint-disable no-undef */
// expect.addSnapshotSerializer(styleSheetSerializer);
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));
