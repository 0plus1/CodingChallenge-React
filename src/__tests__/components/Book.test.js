import React from 'react';
import { shallow } from 'enzyme';

import Book from '../../components/Book';

const book = {
    "book_id": 1,
    "name": "Becker West Arnoldo",
    "isbn": "3181444340",
    "published_at": "2000-01-01",
    "author": "Mrs. John Doe",
    "cover": "https:\/\/lorempixel.com\/640\/480\/?82539"
};

describe('Book', () => {
    it('should render correctly', () => {
        const bookList = shallow(<Book name={book.name} author={book.author} />);
        expect(bookList).toMatchSnapshot();
    });
});

