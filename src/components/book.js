import React from 'react';

export default function Book(props) {
    const {book} = props;
    return (
        <div className="book">
            <div className="book-inner">
                <div className="img-wrapper">
                    <img src={book.cover} alt={book.author}/>
                </div>
                <div className="book-content">
                    {
                        Object.entries(book).map(item => {
                            if (item[0] !== "book_id" && item[0] !== "cover") return (<p>{item[0]}: {item[1]}</p>)
                            return null;
                        })
                    }
                </div>
            </div>
        </div>)
}