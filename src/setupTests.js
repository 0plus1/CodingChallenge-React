import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components/serializer';
import { createSerializer } from 'enzyme-to-json';
import React from "react";

configure({ adapter: new Adapter() });

/* eslint-disable no-undef */
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

// to suppress react ssr errors. appears to be an issue with material and jest/enzyme
React.useLayoutEffect = React.useEffect;
