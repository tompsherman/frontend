import React, {useState, useEffect} from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import './App.css'
import PostForm from './components/PostForm'
import PostPage from './components/PostPage'
import Dashboard from './components/Dashboard'
import styled from 'styled-components'
import RandomCountry from "./components/RandomCountry"

function App() {

  const [onDashboard, setOnDashboard] = useState(false)
  const [onPostPage, setOnPostPage] = useState(false)

  const onSubmit = () => {

  }
  
  return (
    <>
    <StyledApp>
    <div className="app">
      <div className="title">
        <h1>Ex-Pat Journal</h1>
      </div>
      <nav className="nav">
        <a href="https://focused-carson-e247ce.netlify.app/index.html"><b>Home</b></a>
        <a href="https://focused-carson-e247ce.netlify.app/about%20team.html"><b>Meet The Team</b></a>
        <a href="https://focused-carson-e247ce.netlify.app/location%201.html"><b>Entries</b></a>
      </nav>
      <br />
      <br />
      <br />
      <br />
      <br />

        <div className= "button-container">
          <div className="links">
            {!onDashboard ? (<>
              <Link className="link" to="/login">Log In</Link>
              <Link className="link" to="/register">Register</Link>
            </>) : ''}
          </div>
        </div>
    </div>
        <br />
      </StyledApp>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path ="/register">  
            <Register />
          </Route>
          <Route path="/dashboard">
            <Dashboard onDashboard={setOnDashboard} />  
          </Route>      
          <Route path="/postpage">
            <PostPage onPostPage={setOnPostPage} />  
          </Route>   
        </Switch>
        <br />
        <hr />
        <RandomCountry />
    </>
  );
}

const StyledApp = styled.main `
  h1 {
    font-family: 'Rock Salt', cursive;
  }

  .app {
    background-image: url("https://cdn.pixabay.com/photo/2016/01/09/18/27/old-1130731_960_720.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 500px;
 }
 
 .title{
    text-align: center;
    color: black;
    background-color: #ED6A5A;
    margin: 0 auto;
    width: 100%;
    font-family: 'Nunito', sans-serif;
 }

 .link {
    border-radius: 5px;
    border: 2px solid darkgrey;
    color: #F4F1BB;
    background-color: #5CA4A9;
    padding: 15px;
    width: 150px;
    display: block;
    margin: 1.5rem auto;
    text-align: center;
    text-decoration: none;
    font-family: 'Nunito', sans-serif;
    &:hover{
      background-color: #F4F1BB;
      color: #5CA4A9;
      cursor: pointer;
    }
    &:focus {
    border: gray;
    outline: none;
    }
    &:active {
    border: gray;
    outline: none;
  }
 }

 nav {
    margin: 0 auto;
    width: 500px;
    background-color: #ED6A5A;
    text-align: center;
    display: flex;
    justify-content: space-between;
 }
  nav > a {
    /* border-radius: 5px; */
    /* border: 2px solid darkgrey; */
    color: black;
    padding: 15px;
    /* width: 150px; */
    /* display: inline; */
    /* float: right; */
    /* margin: 0 auto; */
    text-align: center;
    text-decoration: none;
    font-family: 'Rock Salt', cursive;
    &:hover{
      /* background-color: #F4F1BB; */
      color: #5CA4A9;
      text-shadow: 2px 2px 2px #F4F1BB;
      cursor: pointer;
    }
    &:focus {
      border: gray;
      outline: none;
    }
    &:active {
      border: gray;
      outline: none;
    }
  }
`

export default App;