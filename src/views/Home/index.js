/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import ThemeStandard from 'themes/Standard';
import BookItem from 'components/BookItem';
import * as bookItemTypes from 'types/bookItem';

class HomeView extends React.Component {
  componentDidMount() {
    // Request all books
    const { fetchItems } = this.props;
    fetchItems();
  }

  /**
   * Render book component
   */
  renderBooks() {
    const { allBooks } = this.props;
    return allBooks.map(({
      id,
      bookCover,
      bookId,
      authorName,
      isbn,
      title,
      publishedAt,
    }) => (
      <div className="w-full md:w-1/3 mb-4">
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
        {this.renderBooks()}
      </div>
    );
  }
}
HomeView.propTypes = {
  fetchItems: PropTypes.func,
  allBooks: PropTypes.arrayOf(PropTypes.shape(bookItemTypes.propTypes)),
};

HomeView.defaultProps = {
  fetchItems: null,
  allBooks: [],
};

export default ThemeStandard(HomeView, 'Browse');
