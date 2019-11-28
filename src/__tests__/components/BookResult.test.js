import React from 'react';
import {shallow, mount} from 'enzyme';
import { Card } from '@material-ui/core';
import BookResult from '../../components/BookResult';

const book = {bookId: 1, isbn: '23421423', name: 'test book', publishedAt: '2019-12-23', cover: '/path/to/image', author: 'I wrote it'};

describe('<BookResult />', () => {
    it('renders without crashing', () => {
        shallow(<BookResult {...book} />);
    });

    it('renders with props', () => {
        const wrapper = mount(<BookResult {...book} />);
        expect(wrapper.props().isbn).toEqual(book.isbn);
        // confirm that the aria-label is set with the book name
        expect(wrapper.find(Card).getDOMNode().attributes.getNamedItem('aria-label').nodeValue).toEqual(book.name);
        wrapper.unmount();
    });
});
