import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadBooks } from "../../redux/actions/bookActions";
import BookList from "./BookList";

const HomeStyle = {
  display: "flex",
  flexDirection: "column",
  flexBasis: "100%",
  flex: 1
};
const BooksPage = ({ books, loadBooks, ...props }) => {
  useEffect(() => {
    if (books.length === 0) {
      loadBooks();
    }
  }, []);
  return (
    <div style={HomeStyle}>
      <div className='row'>
        <BookList books={books} />
      </div>
    </div>
  );
};
BooksPage.propTypes = {
  books: PropTypes.array.isRequired
};
const mapStateToProps = state => {
  return {
    books: state.books
  };
};
const mapDispatchToProps = {
  loadBooks
};
export default connect(mapStateToProps, mapDispatchToProps)(BooksPage);
