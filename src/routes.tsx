import React from 'react';
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import BooksContainer from './container/BooksContainer';
import BookContainer from "./container/BookContainer";
import Header from './component/Header';
import Footer from './component/Footer';

const Routes = () => (
  <Router history={createBrowserHistory()}>
    <>
    <Header />
    <Switch>
      <Route exact path="/" component={BooksContainer} />
      <Route path="/book/:id" component={BookContainer} />
    </Switch>
    <Footer />
    </>
  </Router>
);

export default Routes;
