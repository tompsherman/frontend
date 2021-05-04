import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import * as yup from "yup";
import schema from "../formSchemas/postFormSchema";
import Dashboard from "./Dashboard";
import DashboardCard from "./DashboardCard";
import { addPost } from "../actions/PostsActions";
import styled from "styled-components";
import DragDrop from "./DragDrop";
import { useHistory } from "react-router";

const initialFormValues = {
  name: "",
  title: "",
  location: "",
  date: "",
  notes: "",
  rating: "",
  viewable: false,
};

const initialFormErrors = {
  name: "",
  title: "",
};

const initialDisabled = true;

const PostForm = (props) => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [post, setPost] = useState([]);
  const history = useHistory();

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
  };

  const changeHandler = (event) => {
    const { name, value, type, checked } = event.target;
    validate(name, value);
    const valueToUse = type === "checkbox" ? checked : value;
    setFormValues({ ...formValues, [name]: valueToUse });
    console.log(name, valueToUse);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newPost = {
      name: formValues.name.trim(),
      title: formValues.title.trim(),
      location: formValues.location.trim(),
      date: formValues.date.trim(),
      notes: formValues.notes.trim(),
      rating: formValues.rating,
      viewable: formValues.viewable,
      user_id: localStorage.getItem("user_id"),
    };
    console.log("New post:", newPost);
    props.addPost(newPost, history, setFormValues, initialFormValues);
    setFormValues(initialFormValues);
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <>
      <h2>Add a new entry:</h2>

      <div>
        <div>{formErrors.name}</div>
        <div>{formErrors.title}</div>
      </div>

      <StyledForm onSubmit={submitHandler}>
        <FormGroup>
          <Label for="name">Name: </Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="enter your name"
            onChange={changeHandler}
          />
        </FormGroup>
        <br />
        <FormGroup>
          <Label for="title">Tagline: </Label>
          <Input
            type="text"
            name="title"
            id="title"
            placeholder="enter your post title"
            onChange={changeHandler}
          />
        </FormGroup>
        <br />
        <FormGroup>
          <Label for="location">Location: </Label>
          <Input
            type="text"
            name="location"
            id="location"
            placeholder="enter your post location"
            onChange={changeHandler}
          />
        </FormGroup>
        <br />
        <FormGroup>
          <Label for="date">Date: </Label>
          <Input
            type="text"
            name="date"
            id="date"
            placeholder="enter the date of your visit"
            onChange={changeHandler}
          />
        </FormGroup>
        <br />
        <FormGroup>
          <Label for="notes">Post notes: </Label>
          <Input
            type="notes"
            name="notes"
            id="notes"
            onChange={changeHandler}
          />
        </FormGroup>
        <br />
        <FormGroup tag="fieldset">
          <legend>rating</legend>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="rating"
                value="5"
                onChange={changeHandler}
              />{" "}
              *****
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="rating"
                value="4"
                onChange={changeHandler}
              />{" "}
              ****
            </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Label check>
              <Input
                type="radio"
                name="rating"
                value="3"
                onChange={changeHandler}
              />{" "}
              ***
            </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Label check>
              <Input
                type="radio"
                name="rating"
                value="2"
                onChange={changeHandler}
              />{" "}
              **
            </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Label check>
              <Input
                type="radio"
                name="rating"
                value="1"
                onChange={changeHandler}
              />{" "}
              *
            </Label>
          </FormGroup>
        </FormGroup>
        <br />
        <DragDrop />
        <br />
        <FormGroup check>
          <Label check>
            <Input name="viewable" type="checkbox" onChange={changeHandler} />{" "}
            Make Post Private
          </Label>
        </FormGroup>
        <br />
        <Button disabled={disabled}>Submit</Button>
      </StyledForm>
      <br />
      <br />

      <DashboardCard post={post} />
    </>
  );
};

const StyledForm = styled.form`
  input {
    border: 2px solid darkgrey;
    padding: 15px;
    border-radius: 5px;
  }

  button {
    border-radius: 5px;
    border: 2px solid darkgrey;
    color: #f4f1bb;
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

    button {
        border-radius: 5px;
        border: 2px solid darkgrey;
        color: #F4F1BB;
        background-color: #5CA4A9;
        padding: 15px;
        width: 25%;
        display: block;
        margin: 0 auto;
        text-align: center;
        font-family: 'Nunito', sans-serif;
        &:hover{
          background-color: #F4F1BB;
          color: #5CA4A9;
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
        .dragDrop-container{
          background-color: gray;
        }

}`;
const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};
export default connect(mapStateToProps, { addPost })(PostForm);
