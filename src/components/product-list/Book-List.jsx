import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import LayoutHOC from '../../HOC/LayoutHOC';
import { BookListComponentPropTypes } from './Book-List-Props';

export const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

export const StyledLink = styled(Link)`
  display: flex;
  color: #333;

  &:hover {
    text-decoration: none;
  }
`;

export const ListItem = styled.li`
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
  border: 1px solid #333;
  min-width: 50px;
  max-width: 100px;
  min-height: 50px;
  max-height: 100px;
  margin-right: 20px;

`;


export function BookListComponent({ books }) {
  if (books && books.length) {
    return (
      <List>
        {books.map(curr => (
          <ListItem key={curr.book_id}>

            <StyledLink to={`/books/${curr.book_id}`}>
              <Cover src={curr.cover} alt={`${curr.name} cover`} />
              <div>
                <Title>{curr.name}</Title>
                <Author>{curr.author}</Author>
              </div>
            </StyledLink>
          </ListItem>
        ))}
      </List>
    );
  }

  return <div>No books found</div>;
}

BookListComponent.propTypes = BookListComponentPropTypes;

BookListComponent.defaultProps = {
  books: [],
};

export default LayoutHOC('book-list')(BookListComponent);
