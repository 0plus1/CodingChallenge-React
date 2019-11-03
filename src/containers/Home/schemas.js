/* eslint-disable import/no-unresolved */
import { normalize, schema } from 'normalizr';

// Define book items entity
const bookItems = new schema.Entity('bookItems', {}, {
  idAttribute: 'book_id',
  processStrategy: item => Object.assign({
    id: item.book_id,
    bookCover: item.cover,
    bookId: item.book_id,
    authorName: item.author,
    isbn: item.isbn,
    title: item.name,
    publishedAt: item.published_at || new Date().toDateString,
  }),
});

export default data => normalize(data, {
  books: new schema.Array(bookItems),
});
