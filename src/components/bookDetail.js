import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import fetchBooksAction from "../utils/api";
import { getbooksError, getbooks, getbooksPending } from "../store/bookReducer";
//import ProductList from './FetchBooks';
import fetchbooks from "../utils/api";
import styled from "styled-components";

const BookContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const BookHeader = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const BookList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: circle;
  display: table;
  border-spacing: 10px;
  border-collapse: separate;
  margin: 0 auto;

  p {
    padding: 10px;
    margin: 0;
    line-height: 10px;
  }
`;

class BookView extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentWillMount() {
    const { fetchbooks } = this.props;
    fetchbooks();
  }
  componentDidMount() {
    fetchbooks();
  }

  shouldComponentRender() {
    const { pending } = this.props;
    if (this.pending === false) return false;
    // more tests
    return true;
  }

  render() {
    const { books, error, pending } = this.props;

    return (
      <BookContainer className="Book-list-wrapper">
        {error && <span className="Book-list-error">{error}</span>}
        <div>
          <BookHeader> Book Details</BookHeader>
          <BookList>
            {books.map(book => (
              <li key={book.book_id} align="start">
                <div>
                  <p>{book.name}</p>
                  <p>{book.isbn}</p>
                  <p>{book.published_at}</p>
                  <p>{book.author}</p>
                  <p>{book.cover}</p>
                </div>
              </li>
            ))}
          </BookList>
        </div>
      </BookContainer>
    );
  }
}

const mapStateToProps = state => ({
  error: getbooksError(state),
  books: getbooks(state),
  pending: getbooksPending(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchbooks: fetchBooksAction
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookView);
