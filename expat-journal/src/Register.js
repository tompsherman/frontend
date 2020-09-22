import React, {useState} from 'react';
import {Route, Link, Switch, useHistory} from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import axios from "axios"
import Dashboard from './Dashboard'
import * as yup from "yup"
import schema from "./regFormSchema"



const initialFormValues = {
  name: "",
  email: "",
  password: "",
  checkbox: false

}

const initialFormErrors = {
  email: "",
  password: "",
  checkbox: false
}

const Register = (props) => {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const history = useHistory()
  
  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then((valid)=>{
        setFormErrors({
          ...formErrors, [name]: "",
        })
      })
      .catch((err)=>{
        setFormErrors({
          ...formErrors, [name]: err.errors[0]
        })
      })
  }

  const regChange = (event) => {
    validate(event.target.name, event.target.value)
    setFormValues({...formValues, [event.target.name]: event.target.value})
  }

  const onSubmit = (event) => {
      event.preventDefault()
      axios
        .post()
        .then()
        .catch()
        .finally()
        history.push("/dashboard")
  }
  
  return (
    <>
      <h2>Register</h2>

      <div>
        <div>{formErrors.email}</div>
        <div>{formErrors.password}</div>
        <div>{formErrors.checkbox}</div>
      </div>

      <Form onSubmit={onSubmit}> 
          <FormGroup>
          <Label for="name">Name: </Label>
          <Input type="text" name="name" id="name" value={formValues.name} onChange ={regChange} placeholder="enter your name" />
        </FormGroup>
        <FormGroup>
          <Label for="email">Login Email: </Label>
          <Input type="email" name="email" id="email" value={formValues.email} onChange ={regChange} placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password: </Label>
          <Input type="password" name="password" id="password" value={formValues.password} onChange ={regChange} placeholder="password placeholder" />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input name="checkbox" type="checkbox" value={formValues.checkbox} onChange ={regChange}/>{' '}
            I agree with the terms of service
          </Label>
        </FormGroup>
        <button type="submit" onSubmit={onSubmit} >Submit</button>
      </Form>
    </>
  );
}

export default Register;