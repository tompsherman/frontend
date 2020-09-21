import React from 'react';
import logo from './logo.svg';
import Login from './Login'
import Register from './Register'
import './App.css';
import PostForm from './PostForm';
import DashboardCard from './Dashboard'

function App() {
  return (
    <div className="App">
      <Login />
      <Register />
      <PostForm />
      <DashboardCard />
    </div>
  );
}

export default App;
