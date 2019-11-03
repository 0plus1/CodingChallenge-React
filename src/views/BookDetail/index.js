/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import ThemeStandard from 'themes/Standard';
import BookItemDetail from 'components/BookItemDetail';
import BookItem from 'components/BookItem';
import * as bookItemTypes from 'types/bookItem';

class BookDetail extends React.Component {
  componentDidMount() {
    // Request all books
    const { fetchItems } = this.props;
    fetchItems();
  }

  /**
   * Render book component
   */
  renderBookDetail() {
    const { book } = this.props;

    if (book.length === 0) {
      return (
        <h1>Book not found!</h1>
      );
    }

    return book.map(({
      id,
      bookCover,
      bookId,
      authorName,
      isbn,
      title,
      publishedAt,
    }) => (
      <div className="w-full">
        <BookItemDetail
          key={id}
          bookId={bookId}
          bookCover={bookCover}
          authorName={authorName}
          isbn={isbn}
          title={title}
          publishedAt={publishedAt}
        />
      </div>
    ));
  }

  /**
   * Render book component
   */
  renderRelatedBooks() {
    const { allRelatedBooks } = this.props;
    return allRelatedBooks.map(({
      id,
      bookCover,
      bookId,
      authorName,
      isbn,
      title,
      publishedAt,
    }) => (
      <div className="w-full md:w-1/2 mb-4">
        <BookItem
          key={id}
          bookId={bookId}
          bookCover={bookCover}
          authorName={authorName}
          isbn={isbn}
          title={title}
          publishedAt={publishedAt}
        />
      </div>
    ));
  }

  render() {
    return (
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/2 mb-4">
          {this.renderBookDetail()}
        </div>
        <div className="w-full sm:w-1/2 mb-4">
          <h2>Related books</h2>
          <div className="flex flex-wrap">
            {this.renderRelatedBooks()}
          </div>
        </div>
      </div>
    );
  }
}
BookDetail.propTypes = {
  fetchItems: PropTypes.func,
  book: bookItemTypes.propTypes,
  allRelatedBooks: PropTypes.arrayOf(PropTypes.shape(bookItemTypes.propTypes)),
};

BookDetail.defaultProps = {
  fetchItems: null,
  book: bookItemTypes.defaultProps,
  allRelatedBooks: [],
};

export default ThemeStandard(BookDetail, 'Detail');
