import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import styled from "styled-components";
import { deletePost, editPost } from "../actions/PostsActions"; //TE

const initialpost = {
  id: "",
  name: "",
  title: "",
  location: "",
  rating: "",
  date: "",
  notes: "",
};

const DashboardCard = (props) => {
  const { id, image, name, title, location, rating, date, notes } = props.post;
  const [editing, setEditing] = useState(false);
  const [postToEdit, setPostToEdit] = useState(initialpost);
  // console.log(props);

  const deleteEntry = (e) => {
    e.preventDefault();
    props.deletePost(id);
  };

  const editEntry = (epost) => {
    setEditing(true);
    setPostToEdit(props.post);
  };

  const saveEdit = (e) => {
    e.preventDefault();
    props.editPost(id, postToEdit);
  };

  return (
    <StyledMain>
      <Card>
        <div className="card">
          <CardImg
            className="img"
            top
            width="50%"
            src="https://pullman.accor.com/destinations/country/thailand-1400x788-1.jpg"
            alt="Card image cap"
          />
          <CardBody className="cardBody">
            <CardTitle className="title">Post-name: {name}</CardTitle>
            <br />
            <CardSubtitle className="subTitle">Tagline: {title}</CardSubtitle>
            <button onClick={editEntry}>Edit Entry</button>
            <CardText className="text">Date: {date}</CardText>
            <CardText className="text">Location: {location}</CardText>
            <CardText className="text">Description: {notes}</CardText>
            <CardText className="text">Rating: {rating}</CardText>
            <Button onClick={deleteEntry}>Delete Entry</Button>

            <br />
            <br />
            {editing && (
              <form onSubmit={saveEdit}>
                <legend>Edit Entry</legend>
                <ul>
                  <label>
                    Post-name:
                    <input
                      onChange={(e) =>
                        setPostToEdit({ ...postToEdit, name: e.target.value })
                      }
                      value={postToEdit.name}
                    />
                  </label>

                  <label>
                    Tagline:
                    <input
                      onChange={(e) =>
                        setPostToEdit({ ...postToEdit, title: e.target.value })
                      }
                      value={postToEdit.title}
                    />
                  </label>

                  <label>
                    Date:
                    <input
                      onChange={(e) =>
                        setPostToEdit({ ...postToEdit, date: e.target.value })
                      }
                      value={postToEdit.date}
                    />
                  </label>

                  <label>
                    Location:
                    <input
                      onChange={(e) =>
                        setPostToEdit({
                          ...postToEdit,
                          location: e.target.value,
                        })
                      }
                      value={postToEdit.location}
                    />
                  </label>
                  <label>
                    Description:
                    <input
                      onChange={(e) =>
                        setPostToEdit({ ...postToEdit, notes: e.target.value })
                      }
                      value={postToEdit.notes}
                    />
                  </label>

                  <label>
                    Rating:
                    <input
                      onChange={(e) =>
                        setPostToEdit({ ...postToEdit, rating: e.target.value })
                      }
                      value={postToEdit.rating}
                    />
                  </label>
                </ul>
                <div className="button-row">
                  <button type="submit">save</button>
                  <button onClick={() => setEditing(false)}>cancel</button>
                </div>
              </form>
            )}
          </CardBody>
        </div>
      </Card>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  .card {
    border: 2.5px solid #9bc1bc;
    font-family: "Nunito", sans-serif;
  }

  .cardText {
    font-family: "Nunito", sans-serif;
  }

  .img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .cardBody {
    text-align: center;
    font-family: "Rock Salt", cursive;
    font-family: "Nunito", sans-serif;
  }

  button {
    border-radius: 5px;
    order: 2px solid darkgrey;
    post: #f4f1bb;
    background-color: #5ca4a9;
    padding: 15px;
    width: 25%;
    display: block;
    margin: 0 auto;
    text-align: center;
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
export default connect(mapStateToProps, { deletePost, editPost })(
  DashboardCard
);
