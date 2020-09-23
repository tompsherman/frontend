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
        <div className= "button-container">
          <div className="links">
            {!onDashboard ? (<>
              <Link to="/login"><button>Log In</button></Link>
              <Link to="/register"><button onSubmit={onSubmit}>Register</button></Link>
            </>) : ''}
          </div>
        </div>
        
    </div>
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
        <br/>
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

 button {
        border-radius: 5px;
        color: #F4F1BB;
        background-color: #5CA4A9;
        padding: 15px;
        width: 150px;
        display: block;
        margin: 0 auto;
        text-align: center;
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
`

export default App;