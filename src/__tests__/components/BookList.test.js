import React from 'react';
import { shallow, mount } from 'enzyme';

import BookList from '../../components/BookList';

const books = {
    "0": {
        "book_id": 1,
        "name": "Becker West Arnoldo",
        "isbn": "3181444340",
        "published_at": "2000-01-01",
        "author": "Mrs. John Doe",
        "cover": "https:\/\/lorempixel.com\/640\/480\/?82539"
    },
    "1": {
        "book_id": 2,
        "name": "Schuster Champlinborough",
        "isbn": "1441614311",
        "published_at": "1991-07-29",
        "author": "Prof. John Doe",
        "cover": "https:\/\/lorempixel.com\/640\/480\/?84662"
    }
};

describe('BookList', () => {
    it('should render correctly', () => {
        const bookList = shallow(<BookList books={books} />);
        expect(bookList).toMatchSnapshot();
    });

    it('should have the correct number of children elements', () => {
        const bookList = shallow(<BookList books={books} />);
        expect(bookList.find('.book-list').children()).toHaveLength(2);
    });
});

