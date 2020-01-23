import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Home/HomePage";
import AboutPage from "./About/AboutPage";
import BooksPage from "./Books/BooksPage";
import Header from "./common/Header";
import BookDetailsPage from "./Books/BookDetailsPage";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/books' component={BooksPage} />
        <Route path='/book/:book_id' component={BookDetailsPage} />
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
}
export default App;
