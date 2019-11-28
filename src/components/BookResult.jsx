import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardMedia, CardContent, Avatar, Typography } from '@material-ui/core';

const BookResult = (props) => {
    const { name, isbn, publishedAt, cover, author } = props;
    return (
        <Card aria-label={name} >
            <CardHeader
                avatar={<Avatar aria-label="book">B</Avatar>}
                title={name}
                subheader={publishedAt}
            />
            <CardMedia
                image={cover}
                title={name}
                style={{height: '200px'}}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {author}
                    {isbn}
                </Typography>
            </CardContent>
        </Card>
    );
};
const BookResultPropType = {
    name: PropTypes.string.isRequired,
    isbn: PropTypes.string,
    publishedAt: PropTypes.string,
    cover: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
};
BookResult.propTypes = BookResultPropType;

BookResult.defaultProps = {
    isbn: null,
    publishedAt: null,
};

export {
    BookResultPropType,
    BookResult as default,
};
