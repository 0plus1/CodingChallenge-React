import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Card from "./Card";
const BookDetailsPage = props => {
  const book = props.book;
  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex"
      }}
    >
      {book.map(book => {
        return (
          <>
            <Card>
              <img className='card-img-top' src={book.cover} alt={book.name} />
              {book.name} {book.isbn} {book.published_at} {book.author}
              <Link to={"/books"}>
                <p>Go Back</p>
              </Link>
            </Card>
          </>
        );
      })}
    </div>
  );
};

BookDetailsPage.propTypes = {
  book: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.book_id;
  //console.log(id, state.books);
  return {
    book: state.books.filter(book => book.book_id === parseInt(id))
  };
};

export default connect(mapStateToProps)(BookDetailsPage);
