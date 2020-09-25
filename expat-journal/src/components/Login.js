import React, { useState, useEffect } from "react";
import { Route, Link, Switch, useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
// import axios from "axios"
import AxiosWithAuth from "../utils/AxiosWithAuth";

import * as yup from "yup";
import schema from "../formSchemas/logFormSchema";
import styled from "styled-components";

const initialFormValues = {
  username: "",
  password: "",
};

const initialFormErrors = {
  username: "",
  password: "",
};

const initialDisabled = true;

const Login = (props) => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

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

  const logChange = (event) => {
    validate(event.target.name, event.target.value);
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userLogin = {
      username: formValues.username.trim(),
      password: formValues.password.trim(),
    };

    AxiosWithAuth()
      .post("/api/expat/auth/login", userLogin)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user_id", res.data.user.id);
        history.push("/dashboard");
        console.log("Login res:", res);
      })
      .catch((err) => console.log("Login error:", err));
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <StyledForm onSubmit={onSubmit}>
      <h2>Login</h2>
      <div>
        <div>{formErrors.username}</div>
        <br />
        <div>{formErrors.password}</div>
      </div>
      <FormGroup>
        <Label for="username">Username: </Label>
        <Input
          type="text"
          name="username"
          id="username"
          value={formValues.username}
          onChange={logChange}
          placeholder="enter username"
        />
      </FormGroup>
      <br />
      <FormGroup>
        <Label for="password">Password: </Label>
        <Input
          type="password"
          name="password"
          id="password"
          value={formValues.password}
          onChange={logChange}
          placeholder="enter password"
        />
      </FormGroup>
      <br />
      <Button type="submit" onSubmit={onSubmit} disabled={disabled}>
        Submit
      </Button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  h2 {
    font-family: "Rock Salt", cursive;
    padding: 15px;
  }

  input,
  label {
    padding: 15px;
    font-family: "Nunito", sans-serif;
  }

  input {
    border-radius: 5px;
    font-family: "Nunito", sans-serif;
    border: 2px solid darkgrey;
  }

  button {
    border-radius: 5px;
    border: 2px solid darkgrey;
    color: #f4f1bb;
    background-color: #5ca4a9;
    padding: 15px;
    width: 25%;
    text-align: center;
    font-family: "Nunito", sans-serif;
    &:hover {
      background-color: #f4f1bb;
      color: #5ca4a9;
      cursor: pointer;
    }
  }
`;

export default Login;
