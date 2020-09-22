import React, {useState, useEffect} from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import './App.css'
import PostForm from './components/PostForm'
import Dashboard from './components/Dashboard'
import styled from 'styled-components'

function App() {

  const [onDashboard, setOnDashboard] = useState(false)

  const onSubmit = () => {

  }
  
  return (
    <>
    <StyledApp>
    <div className="app">
        <h1>Ex-Pat Journal</h1>
        {!onDashboard ? (<>
          <Link to="/login"><button>Log In</button></Link>
          <Link to="/register"><button onSubmit={onSubmit}>Register</button></Link>
        </>) : ''}
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
        </Switch>
    </>
  );
}

const StyledApp = styled.main `
 h1{
   text-align: center;
 }
`

export default App;