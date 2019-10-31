import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import BookItem from "../component/BookItem";
import { getBooks } from "../redux/actions/bookActions";

interface Props {
  books: Book[];
  book: Book | undefined;
  getBooks: any;
  match: any;
}

const BookContainer = ({ match, getBooks, books, book }: Props) => {
  const [bk, setBooks] = useState({ ...books });

  useEffect(() => {
    if (books.length === 0) {
      getBooks();
      setBooks({ ...books });
    }
  }, [books]);

  return (
    <>
      <BookItem book={book} />
    </>
  );
};

function mapStateToProps(state: AppState, ownProps: Props) {
  const slug = ownProps.match.url;

  const book = state.books.find(function(book) {
    const link = "/" + book.link;
    if (link == slug) {
      return book;
    }
  });

  return {
    book,
    books: state.books
  };
}

const mapDispatchToProps = {
  getBooks
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookContainer);
