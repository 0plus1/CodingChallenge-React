import React from "react";
import {
  BooksContainerStyled,
  BooksUlStyled,
  BooksLiStyled,
  ListContainerStyled,
  BookCoverStyled,
  BookNameStyled,
  BookAuthorStyled,
  BookIsbnStyled
} from "./BooksStyled";
import { Link } from "react-router-dom";

interface Props {
  books: Book[];
}

const Books: React.FC<Props> = props => {
  return (
    <BooksContainerStyled>
      <BooksUlStyled>
        {props.books.map(book => {
          return (
            <BooksLiStyled>
              <ListContainerStyled>
                <BookCoverStyled src={book.cover} />
                <Link to={book.link}>
                  <BookNameStyled>{book.name}</BookNameStyled>
                </Link>
                <BookAuthorStyled>by {book.author}</BookAuthorStyled>
                <BookIsbnStyled>ISBN: {book.isbn}</BookIsbnStyled>
              </ListContainerStyled>
            </BooksLiStyled>
          );
        })}
      </BooksUlStyled>
    </BooksContainerStyled>
  );
};

export default Books;
