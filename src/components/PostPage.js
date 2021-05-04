import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Link, Switch, useHistory } from "react-router-dom";
import PostForm from "./PostForm";

function PostPage({ onPostPage }) {
  const history = useHistory();

  const onSubmit = (event) => {
    event.preventDefault();
    history.push("/postform");
  };

  useEffect(() => {
    onPostPage(true);
  });

  return (
    <>
      <PostForm />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};
export default connect(mapStateToProps, {})(PostPage);
