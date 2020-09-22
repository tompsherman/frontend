// Virginia's and Tom's code only
import React, { useEffect } from "react";
import { Route, Link, Switch, useHistory } from "react-router-dom";
import DashboardCard from "./DashboardCard";
import PostPage from "./PostPage";

function Dashboard({ onDashboard }) {
  const history = useHistory();

  const onSubmit = (event) => {
    event.preventDefault();
    history.push("/postpage");
  };

  useEffect(() => {
    onDashboard(true);
  });

  return (
    <>
      <DashboardCard />
      <Link to="/postpage">
        <button onSubmit={onSubmit}>New Post Form</button>
      </Link>
    </>
  );
}

export default Dashboard;
