import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Card from "./Card";
// const Wrapper = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   align-items: center;
//   &:hover {
//     opacity: 0.5;
//     cursor: pointer;
//   }
// `;
// const Card = styled.div`
//   width: 200px;
//   margin: 10px;
//   border: 1px solid #ccc;
//   box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
// `;
// const Cardimage = styled.div`
//   max-width: 100%;
// `;

// const Contents = styled.p`
//   padding: 0 20px 20px;
// `;
export default function BookList({ books }) {
  return (
    <>
      {books.map(book => {
        return (
          <>
            {/* <div className='container-fluid'>
              <div className='row'>
                <Link to={"/book/" + book.book_id}>
                  <div key={book.book_id} className='card col-12'>
                    <img
                      className='card-img-top'
                      src={book.cover}
                      alt='Photo of books'
                    />
                    <div className='card-body'>
                      <h5 className='card-title'>Name:</h5> {book.name}
                      <p className='card-text'>
                        Published Date: {book.published_at}
                        ISBN: {book.isbn} Author: {book.author}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div> */}
            <Card>
              <img
                className='card-img-top'
                src={book.cover}
                alt='Photo of books'
              />
              {book.name} {book.isbn} {book.published_at} {book.author}
              <Link to={"/book/" + book.book_id}>
                <p>Learn More</p>
              </Link>
            </Card>
          </>
        );
      })}
    </>
  );
}

BookList.propTypes = {
  books: PropTypes.array.isRequired
};
