import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux"; //TE
import thunk from "redux-thunk"; //TE
import logger from "redux-logger"; //TE
import { Provider } from "react-redux"; //TE
// import { connect } from "react-redux"; //TE
import { PostsReducer } from "./reducer/PostsReducer"; //TE
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";

const store = createStore(PostsReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <Router>
      <App />
    </Router>
    {/* </React.StrictMode> */}
  </Provider>,
  document.getElementById("root")
);
