// Virginia's and Tom's code with some mine (TE)
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"; //TE
import { PrivateRoute } from "./components/PrivateRoute"; //TE
import Login from "./components/Login";
import Register from "./components/Register";
import "./App.css";
import PostForm from "./components/PostForm";
import PostPage from "./components/PostPage";
import Dashboard from "./components/Dashboard";
import styled from "styled-components";

function App() {
  const [onDashboard, setOnDashboard] = useState(false);
  const [onPostPage, setOnPostPage] = useState(false);

  const onSubmit = () => {};

  return (
    <Router>
      <StyledApp>
        <div className="app">
          <div className="title">
            <h1>Ex-Pat Journal</h1>
          </div>
          <div className="links">
            {!onDashboard ? (
              <>
                <Link to="/login">
                  <button>Log In</button>
                </Link>
                <Link to="/register">
                  <button onSubmit={onSubmit}>Register</button>
                </Link>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </StyledApp>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        {/* <Route path="/dashboard">
          <Dashboard onDashboard={setOnDashboard} />
        </Route>
        <Route path="/postpage">
          <PostPage onPostPage={setOnPostPage} />
        </Route> */}
        <PrivateRoute path="/posts">
          <Dashboard onDashboard={setOnDashboard} />
          <PostPage onPostPage={setOnPostPage} />
        </PrivateRoute>
      </Switch>
    </Router> //TE
  );
}

const StyledApp = styled.main`
  h1 {
    font-family: "Rock Salt", cursive;
  }
  .app {
    background-image: url("https://cdn.pixabay.com/photo/2016/01/09/18/27/old-1130731_960_720.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 500px;
  }

  .title {
    text-align: center;
    color: black;
    background-color: #ed6a5a;
    margin: 0 auto;
    width: 100%;
    font-family: "Nunito", sans-serif;
  }
  button {
    border-radius: 15px;
    color: #f4f1bb;
    background-color: #5ca4a9;
    padding: 15px;
    width: 25%;
    text-align: center;
    font-family: "Nunito", sans-serif;
  }
  .links > button {
    display: flex;
    justify-content: center;
    font-family: "Nunito", sans-serif;
  }
  .links:a > button {
    display: flex;
    justify-content: center;
    width: 100%;
    font-family: "Nunito", sans-serif;
    /* &:hover{
      background-color: slategrey;
      color: greenyellow;
      cursor: pointer;
  }
  &:focus {
      border: gray;
      outline: none;
      }
  &:active {
      border: gray;
      outline: none;
  } */
  }
`;

export default App;
