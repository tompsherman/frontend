import React, { useEffect } from "react";
import { Route, Link, Switch, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import DashboardCard from "./DashboardCard";
import PostPage from "./PostPage";
import { fetchPosts } from "../actions/PostsActions"; //TE
import styled from "styled-components";

function Dashboard(props) {
  const { posts } = props;
  const history = useHistory();

  useEffect(() => {
    props.fetchPosts(localStorage.getItem("user_id"));
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    history.push("/postpage");
  };

  return (
    <StyledMain>
      <h2>Dashboard</h2>
      {posts && posts.length > 0 ? (
        posts.map((item) => {
          return <DashboardCard post={item} key={item.id} />;
        })
      ) : (
        <></>
      )}

      <br />
      <br />
      <Link to="/postpage" className="link" onSubmit={onSubmit}>
        Submit New Post
      </Link>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  h2 {
    font-family: "Rock Salt", cursive;
  }
  .link {
    border-radius: 5px;
    border: 2px solid darkgrey;
    color: #f4f1bb;
    background-color: #5ca4a9;
    padding: 15px;
    width: 25%;
    display: block;
    margin: 0 auto;
    text-align: center;
    text-decoration: none;
    font-family: "Nunito", sans-serif;
    &:hover {
      background-color: #f4f1bb;
      color: #5ca4a9;
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
`;

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};
export default connect(mapStateToProps, { fetchPosts })(Dashboard);
