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
            <Link to="/postpage"><button onSubmit={onSubmit}>New Post Form</button></Link>
        </StyledMain>
    )
}

const StyledMain = styled.main `
    h2 {
        font-family: 'Rock Salt', cursive;
    }
`

export default Dashboard;