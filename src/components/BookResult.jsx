import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Avatar,
  Typography,
  CardActionArea
} from '@material-ui/core';
import styled from 'styled-components';
import { StyledLink } from './index';

const StyledCard = styled(Card)`
  min-width: 288px;
`;

const StyledCardMedia = styled(CardMedia)`
  height: 200px;
`;

const BookResult = ({ bookId, name, isbn, publishedAt, cover, author }) => (
  <StyledLink to={`/books/${bookId}`}>
    <StyledCard aria-label={name}>
      <CardActionArea>
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
            <p><strong>Author</strong> {author}</p>
            <p><strong>ISBN</strong> {isbn}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  </StyledLink>
);

BookResult.propTypes = {
  bookId: PropTypes.number.isRequired,
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
