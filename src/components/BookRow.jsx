import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import {
    Link
  } from "react-router-dom";
const BookRow = ({book}) => {
    return (
        
            <TableRow
                key={book.book_id}
            >
                    <TableCell>{book.book_id}</TableCell>
                    <TableCell><img src={book.cover} height="200" /></TableCell>
                    <TableCell><Link to={`/book/${book.book_id}`}>{book.name}</Link></TableCell>
                    <TableCell>{book.isbn}</TableCell>
                
            </TableRow>
    )
}
export default BookRow;