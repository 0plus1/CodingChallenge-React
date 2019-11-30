import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchBooks } from '../actions';
import useFetchBooks from '../hooks/useFetchBooks';

const BodyContainer = styled.div`
  width:100vw;
  height:100vh;
`;

const Home = () => {
  const [books] = useFetchBooks();


  console.log(books);

  if (!books || books.length === 0) {
    return <div data-test="homeComponent">loading</div>;
  }

  return (
    <BodyContainer data-test="homeComponent">
      <h1>
      Welcome!List
      </h1>

    </BodyContainer>
  );
};


Home.propTypes = {

};

export default Home;
