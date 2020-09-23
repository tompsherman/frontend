// import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import PostPage from "./components/PostPage";
import Login from "./components/Login";

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>Expat Journal</h1>
        <Switch>
          <Route exact path="/" component={Login} />

          <PrivateRoute path="/posts" component={PostPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
