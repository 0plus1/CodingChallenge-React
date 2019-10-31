import React from "react";
import { Link } from "react-router-dom";
import {
  ListContainerStyled,
  BookCoverStyled,
  BookNameStyled,
  BookAuthorStyled,
  BookIsbnStyled
} from "./BooksStyled";

interface Props {
  book: Book | undefined;
}

const BookItem: React.FC<Props> = props => {
  if (!props.book) {
    return <div>No Book By this id</div>;
  } else {
    return (
      <div>
        <ListContainerStyled>
          <BookCoverStyled src={props.book.cover} />
          <Link to={props.book.link}>
            <BookNameStyled>{props.book.name}</BookNameStyled>
          </Link>
          <BookAuthorStyled>by {props.book.author}</BookAuthorStyled>
          <BookIsbnStyled>ISBN: {props.book.isbn}</BookIsbnStyled>
        </ListContainerStyled>
      </div>
    );
  }
};

export default BookItem;
