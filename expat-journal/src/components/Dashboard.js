import React, { useEffect } from "react"
import {Route, Link, Switch, useHistory} from "react-router-dom"
import DashboardCard from "./DashboardCard"
import PostPage from "./PostPage"
import styled from "styled-components"

function Dashboard({onDashboard}) {
    
    const history = useHistory()
  
    const onSubmit = (event) => {
        event.preventDefault()
        history.push("/postpage")
    }
    useEffect(() => {
        onDashboard(true)
    })
    
    return (
        <StyledMain>
            <h2>Dashboard</h2>
            <DashboardCard />
            <br />
            <br />
            <Link to="/postpage"><button className="postButton" onSubmit={onSubmit}>New Post Form</button></Link>
        </StyledMain>
    )
}

const StyledMain = styled.main `

    h2 {
        font-family: 'Rock Salt', cursive;
    }
    button {
        border-radius: 5px;
        color: #F4F1BB;
        background-color: #5CA4A9;
        padding: 15px;
        width: 25%;
        display: block;
        margin: 0 auto;
        text-align: center;
        font-family: 'Nunito', sans-serif;
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

export default Dashboard;