import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchBooks } from '../actions';
import useFetchBooks from '../hooks/useFetchBooks';
import Layout from '../components/Layout';
import Loading from '../components/Loading';
import List from '../components/List';

const Home = Layout(() => {
  const [books] = useFetchBooks();

  console.log(books);

  if (!books || books.length === 0) {
    return <Loading />;
  }

  return (
    <div data-test="homeComponent">
      <List books={books} />
    </div>
  );
});


Home.propTypes = {

};

export default Home;
