import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "sanitize.css";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import configureStore from "./redux/configureStore";
import { Provider } from "react-redux";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
// import Routes from "./routes";

const store = configureStore();
ReactDOM.render(
  // TODO use jsx extension for this file, will require to eject the create-react-app
  // eslint-disable-next-line react/jsx-filename-extension
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
