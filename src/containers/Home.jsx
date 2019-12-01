import React from 'react';
import useFetchBooks from '../hooks/useFetchBooks';
import Layout from '../components/Layout';
import Loading from '../components/Loading';
import List from '../components/List';

const Home = Layout(() => {
  const [books] = useFetchBooks();

  if (!books || books.length === 0) {
    return (
      <div data-test="homeComponent">
        <Loading />
      </div>
    );
  }

  return (
    <div data-test="homeComponent">
      <List books={books} />
    </div>
  );
});

export default Home;
