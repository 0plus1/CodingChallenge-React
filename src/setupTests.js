import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { styleSheetSerializer } from "jest-styled-components/serializer";
import {createSerializer} from 'enzyme-to-json';

configure({ adapter: new Adapter() });

expect.addSnapshotSerializer(styleSheetSerializer);
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));
