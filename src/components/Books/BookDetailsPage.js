import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadBooks, loadBookByID } from "../../redux/actions/bookActions";
import BookDetail from "./BookDetail";
import PropTypes from "prop-types";

const BookDetailsPage = ({ books, loadBooks, book, ...props }) => {
  useEffect(() => {
    if (books.length === 0) {
      loadBooks();
    }
  }, []);
  function handleChange() {
    alert("Clicked");
  }
  return (
    <div>
      <BookDetail book={book} onClick={handleChange} />
    </div>
  );
};
// export function getBookById(books, book_id) {
//   console.log(books.find(book => book.book_id === book_id));
//   return books.find(book => book.book_id === book_id) || null;
// }
const mapStateToProps = (state, ownProps) => {
  const book_id = ownProps.match.params.book_id;
  //   console.log(book_id);
  //   const book = getBookById(state.books, book_id);
  //   console.log(book);
  return {
    book: state.books.find(book => book.book_id === book_id),
    books: state.books
  };
};
const mapDispatchToProps = {
  loadBooks,
  loadBookByID
};
BookDetailsPage.propTypes = {
  books: PropTypes.array.isRequired,
  book: PropTypes.object.isRequired,
  loadBooks: PropTypes.func.isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(BookDetailsPage);
