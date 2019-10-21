import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BookCard = ({ book }) => {
  return (
    <StyledBook>
      <StyledBookOuter href={'/book/' + book.book_id } title={book.name}>
        <img src={book.cover} alt={book.name} title={book.name} />
        <h4>{book.name}</h4>
      </StyledBookOuter>
      <StyledBookCover href={'/book/' + book.book_id }>
        <strong>Author: {book.author}</strong>
        <hr />
        <StyledBookDetail>
          <div>Book: {book.name}</div>
          <div>ISBN: {book.isbn}</div>
          <div>Published: {book.published_at}</div>
        </StyledBookDetail>
      </StyledBookCover>
    </StyledBook>
  );
}

const StyledBook = styled.div`
  position: relative;
  margin: 2rem 1.5rem;
  width: calc(100% / 4 - 3rem);
  overflow: hidden;
  display: flex;
  flex-flow: column no-wrap;
  justify-content: start;
  cursor: pointer;

  &:hover { 
    cursor: default;
    box-shadow: 6px 8px 20px 0px rgba(166,164,155,1);
    border-radius: 8px;

    img, h4 {
      filter: blur(3px);
    }
  }   
`;

const StyledBookOuter = styled.a`
  display: block;
  width: 100%;

  > img {
    width: 100%;
    height: auto;
    border: 1px solid #ddd;

    &:before {
      content: "We are sorry, the image is broken :(";
      display: block;
      margin-bottom: .8rem;
    }
  }

  > h4 {
    color: #000;
    margin-top: 1rem;
    user-select: none;
    line-height: normal;
  } 
`;

const StyledBookCover = styled.a`
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  transition: .3s ease;
  padding: 1rem;

  ${StyledBook}:hover & {
    opacity: 1;
    background-color: rgba(254, 235, 200, 0.9);   
  }  

  > strong {
    color: #000;
  }

  > hr {
    width: 50px;
    height: 4px;
    margin: 6px 0;
    border: none;
    outline: none;
    background-color: #f8b62c;
  }

  > .book-cover-content {
    color: #000;
    line-height: normal;
  }

  > .book-cover-link {
    display: inline;
    color: #fff;
    background-color: #35b868;
    border-radius: 2rem;
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 85%;
    text-align: center;
    padding: 6% 0;            
  }  
`;

const StyledBookDetail = styled.div`
  color: #000;
  font-size: .8rem;
`;

BookCard.propTypes = {
  book: PropTypes.shape({
    author: PropTypes.string.isRequired,
    book_id: PropTypes.number.isRequired,
    cover: PropTypes.string.isRequired,
    isbn: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    published_at: PropTypes.string.isRequired,
  }),
};

export default BookCard;
