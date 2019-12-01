import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ItemContainer = styled.div`
  width:100%;
  height:100%;
  padding: 30px 50px;
  display:flex;
  flex-direction:column;
  justify-content:center;
 `;

const ItemImage = styled.img`
  width:320px;
  height:240px;
  margin:auto;
  `;

const ItemText = styled.div`
  text-align:center;
  display:flex;
  flex-direction:row;
  justify-content: space-between;
  width:35%;
  margin:auto;
  padding: 10px 0px;
  
  p {
    padding:10px;
    margin:0;
    line-height:30px;
  }
  
  span {
    padding:10px;
    margin:0;
    line-height:30px;
    font-weight:bold;
    text-transform: capitalize;
  }
  `;

const renameProp = (oldProp, newProp, { [oldProp]: old, ...others }) => (
  { [newProp]: old, ...others });

const Item = ({ book }) => {
  const { book_id, cover, ...rest } = book;
  const display = renameProp('published_at', 'published date', rest);
  return (
    <ItemContainer data-test="itemComponent">
      <ItemImage src={book.cover} alt={book.name} title={book.name} />
      { Object.entries(display).map(
        ([key, value]) => (
          <ItemText key={key}>
            <span>{key}</span>
            <p>{value}</p>
          </ItemText>
        ),
      ) }
      <ItemText>
        <p>
          <Link to="/">Back to home page</Link>
        </p>
      </ItemText>
    </ItemContainer>
  );
};

Item.propTypes = {
  book: PropTypes.shape({
    author: PropTypes.string,
    book_id: PropTypes.number,
    cover: PropTypes.string,
    isbn: PropTypes.string,
    name: PropTypes.string,
    published_at: PropTypes.string,
  }).isRequired,
};

export default Item;
