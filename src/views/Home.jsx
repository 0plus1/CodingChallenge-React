import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "../style/index.scss";
import Book from "../components/book";

function Home() {
    const [books, setBooks] = useState([]);
    const [loading, setLoader] = useState(true);

    const fetchBooks = async () => {
        const {data} = await axios.get(`https://my-json-server.typicode.com/0plus1/CodingChallenge-react/books`);
        setBooks(data);
        if (data) setLoader(false);
    }

    useEffect(() => {
        fetchBooks();
    }, []);


    return (
        <div className="container">
            {
                !loading ?
                    books.map(book => {
                        return (<Book book={book} key={book.book_id}/>)
                    })
                    : <h1>Loading Books</h1>
            }
        </div>
    )
}

export default Home;
