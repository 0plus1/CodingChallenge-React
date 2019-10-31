import React, { useEffect, useState } from "react";
import Books from "../component/Books";
import { getBooks, getBookSuccess } from "../redux/actions/bookActions";
import { connect } from "react-redux";

const HomeStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

interface Props {
  books: Book[];
  getBooks: any;
  match: any;
}

const BooksContainer = ({ match, getBooks, books }: Props) => {
  const [book, setBooks] = useState({ ...books });

  useEffect(() => {
    if (books.length === 0) {
      getBooks();
      setBooks({ ...books });
    }
  }, [books]);

  return (
    <div style={HomeStyle}>
      <Books books={books} />
    </div>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    books: state.books
  };
};

const mapDispatchToProps = {
  getBooks
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksContainer);
