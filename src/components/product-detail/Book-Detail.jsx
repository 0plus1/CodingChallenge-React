import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import LayoutHOC from '../../HOC/LayoutHOC';

export const Detail = styled.div`
  margin: 20px 0;
  display: flex;
  width: 30%;
`;

export const Author = styled.span`
  display: block;
  font-size: 12px;
`;

export const Title = styled.span`
  display: block;
  font-size: 14px;
`;

export const Cover = styled.img`
  display: block;
  border: 1px solid black;
  min-width: 50px;
  max-width: 100px;
  min-height: 50px;
  max-height: 100px;
  margin-right: 20px;

`;

export const ISBN = styled.p`
  margin-bottom: 8px;
  font-size: 10px;
`;

export const Publish = styled.p`
  margin-bottom: 8px;
  font-size: 10px;
  font-weight: bold;
`;

export function BookDetailComponent({ book }) {
  if (book) {
    return (
      <Detail>
        <Cover src={book.cover} alt={`${book.name} cover`} />
        <div>
          <Title>{book.name}</Title>
          <Author>{book.author}</Author>
          <ISBN>
            ISBN:
            {book.isbn}
          </ISBN>
          <Publish>
            Published on:
            {book.published_at}
          </Publish>
        </div>
      </Detail>
    );
  }

  return <div>No books found</div>;
}

BookDetailComponent.propTypes = {
  book: PropTypes.shape({
    book_id: PropTypes.number,
    name: PropTypes.string,
    isbn: PropTypes.string,
    published_at: PropTypes.string,
    author: PropTypes.string,
    cover: PropTypes.string,
  }),
};

BookDetailComponent.defaultProps = {
  book: {},
};

export default LayoutHOC('book-detail')(BookDetailComponent);
