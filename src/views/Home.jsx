import React from 'react';
import PropTypes from 'prop-types';
import Layout from "./Layout";
import { useAsync, IfPending, IfFulfilled, IfRejected } from "react-async";
import axios from 'axios';
import BookResults from "../components/BookResults";
import camelcaseKeys from 'camelcase-keys';

const loadBooks = () => axios.get('https://my-json-server.typicode.com/0plus1/CodingChallenge-react/books')
    .then((response) => {
        return {
            ...response,
            data: camelcaseKeys(response.data)
        };
    });

const Home = () => {
  const state = useAsync({ promiseFn: loadBooks });

  return (
      <React.Fragment>
        <IfPending state={state}>Loading...</IfPending>
        <IfRejected state={state}>{error => `Something went wrong: ${error.message}`}</IfRejected>
        <IfFulfilled state={state}>
          {({data}) => <BookResults books={data}/>}
        </IfFulfilled>
      </React.Fragment>
  );
};

Home.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      testRouting: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Layout(Home);
