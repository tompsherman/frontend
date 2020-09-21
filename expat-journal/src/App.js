import React, {useState, useEffect} from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import './App.css'
import PostForm from './PostForm'
import Dashboard from './Dashboard'

function App() {

  const [onDashboard, setOnDashboard] = useState(false)

  const onSubmit = () => {

  }
  
  return (
    <>
    <div className="App">
        <h1>Ex-Pat Journal</h1>
        {!onDashboard ? (<>
          <Link to="/login"><button>Log In</button></Link>
          <Link to="/register"><button onSubmit={onSubmit}>Register</button></Link>
        </>) : ''}
      </div>
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

export default App;