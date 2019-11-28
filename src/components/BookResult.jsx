import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardMedia, CardContent, Avatar, Typography } from '@material-ui/core';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  min-width: 288px;
`;

const StyledCardMedia = styled(CardMedia)`
  height: 200px;
`;

const StyledAuthor = styled.p``;
const StyledISBN = styled.p``;

const BookResult = ({ name, isbn, publishedAt, cover, author }) => (
  <StyledCard aria-label={name}>
    <CardHeader
      avatar={<Avatar aria-label="book">B</Avatar>}
      title={name}
      subheader={publishedAt}
    />
    <StyledCardMedia
      image={cover}
      title={name}
    />
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="div">
        <StyledAuthor><strong>Author</strong> {author}</StyledAuthor>
        <StyledISBN><strong>ISBN</strong> {isbn}</StyledISBN>
      </Typography>
    </CardContent>
  </StyledCard>
);

BookResult.propTypes = {
  name: PropTypes.string.isRequired,
  isbn: PropTypes.string,
  publishedAt: PropTypes.string,
  cover: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

BookResult.defaultProps = {
  isbn: null,
  publishedAt: null,
};

export default BookResult;
