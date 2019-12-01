import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import COLOR from '../shared/color';

const ListContainer = styled.div`
  width:100%;
  height:100%;
  padding: 30px 50px;
 `;


const ItemText = styled.div`
  width:25%;
  text-align:center;
  p {
    padding:0;
    margin:0;
    line-height:30px;
  }`;

const ItemContainer = styled.div`
  width:100%;
  height:50px;
  padding: 10px 0px;
  display:flex;
  flex-direction:row;
  justify-content:space-evenly;
  transition: background-color 200ms linear;
  &:hover {
     background-color:${COLOR.lightBlue};
  } 
  `;


const List = ({ books }) => (
  <ListContainer data-test="listComponent">
    { books.map(
      book => (
        <ItemContainer key={`${book.book_id}`}>
          <ItemText><p>{book.book_id}</p></ItemText>
          <ItemText><p>{book.name}</p></ItemText>
          <ItemText><p>{book.author}</p></ItemText>
          <ItemText>
            <p>
              <Link to={`${book.book_id}`}>More</Link>
            </p>
          </ItemText>
        </ItemContainer>
      ),
    ) }
  </ListContainer>
);

List.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string.isRequired,
    book_id: PropTypes.number.isRequired,
    cover: PropTypes.string.isRequired,
    isbn: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    published_at: PropTypes.string.isRequired,
  })).isRequired,
};

export default List;
