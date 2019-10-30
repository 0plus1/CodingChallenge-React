import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from './Book';

const HomeStyle = {
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: '25px',
  marginRight: '25px',
};

const TableStyle = {
  width: '100%',
}

const getBookList = (data) => {
  let bookList = [];
  data.forEach(book => bookList.push(<Book
    key={book.book_id}
    {...book}
  />))
  return bookList;
}

const Home = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://my-json-server.typicode.com/0plus1/CodingChallenge-react/books',
      );
      setData(result.data);
    };
    fetchData();
  }, []);  

  return <div style={HomeStyle}>
    <h1>
      List of Books
    </h1>
    <br />
    {data && <table style={TableStyle}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>ISBN</th>
          <th>Published at</th>
          <th>Author</th>
          <th>Cover Page</th>
        </tr>
      </thead>
      <tbody>
        {getBookList(data)}
      </tbody>
    </table>}
  </div>
};

export default Home;
