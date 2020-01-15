import React from 'react'
import Book from './Book'

const BookList = ({ books }) => {

    return (
        <div className="book-list">
            {
                Object.values(books).map((book) => {
                    return (
                        <Book key={book.book_id} name={book.name} author={book.author} />
                    )
                })
            }
        </div>
    )
};


// const BookList = ({ books }) => {
//     return (
//         <div className="book-list">
//             {
//                 books.map(({ book_id, name, author }) => {
//                     return (
//                         <Book key={book_id} name={name} author={author} />
//                     )
//                 })
//             }
//         </div>
//     )
// };

export default BookList;
