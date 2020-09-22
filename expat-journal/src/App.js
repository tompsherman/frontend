import React, {useState, useEffect} from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import './App.css'
import PostForm from './components/PostForm'
import PostPage from './components/PostPage'
import Dashboard from './components/Dashboard'
import styled from 'styled-components'

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
        <div className="links">
          {!onDashboard ? (<>
            <Link to="/login"><button>Log In</button></Link>
            <Link to="/register"><button onSubmit={onSubmit}>Register</button></Link>
          </>) : ''}
        </div>

     
      </div>
      </StyledApp>
      <div className="main">
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
      </div>
    </>
  );
}

const StyledApp = styled.main `
 .main {
   background-image: url("https://us04web.zoom.us/j/72123799692?pwd=dWJDVUM5dng2T2lyTFF3MkNxaVdjQT09");
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
 }
 
 .title{
   text-align: center;
   color: black;
   background-color: #ED6A5A;
   margin: 0 auto;
   width: 100%;
 }

 button {
   border-radius: 15px;
   color: #F4F1BB;
   background-color: #5CA4A9;
   padding: 15px;
   width: 25%;
   text-align: center
 }

 .links > button {
   display: flex;
   justify-content: center;
   
 }

 .links:a {
   display: flex;
   justify-content: center;
   width: 100%;
   &:hover{
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
  }
 }
`

export default App;