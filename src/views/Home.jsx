import React, { useEffect } from 'react';
import axios from 'axios';
import BooksContainer from '../containers/BooksContainer';
import { Provider } from 'react-redux';
import createStore from '../store/createStore';
import { loadBooks } from '../store/actions/books';
import reducers from '../store/reducers';

const store = createStore(reducers);

const Home = ({ match }) => {
  useEffect(() => {
    axios.get(`https://my-json-server.typicode.com/0plus1/CodingChallenge-react/books`)
      .then(res => {
        store.dispatch(loadBooks(res.data))
      })
  });

  return (
    <Provider store={store}>
      <BooksContainer />
    </Provider>
  );
};

export default Home;
