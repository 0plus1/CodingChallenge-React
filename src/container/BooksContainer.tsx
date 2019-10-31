import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
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

  console.log(books);

  return <div style={HomeStyle}>Hello</div>;
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
