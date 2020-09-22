import React, {useState, useEffect} from 'react';
import {Route, Link, Switch, useHistory} from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import axios from "axios"
import Dashboard from './Dashboard'
import * as yup from "yup"
import schema from "../formSchemas/regFormSchema"



const initialFormValues = {
  username: "",
  email: "",
  password: "",
  checkbox: false

}

const initialFormErrors = {
  username: "",
  email: "",
  password: "",
  checkbox: false
}

const initialDisabled = false

const Register = (props) => {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

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
    const { name, value, type, checked } = event.target
    validate(name, value)
    const valueToUse = type === "checkbox"? checked : value
    setFormValues({...formValues, [name]: valueToUse})
  }

  const onSubmit = (event) => {
      event.preventDefault()
      const newUser = {
        username: formValues.username.trim(),
        email: formValues.email.trim(),
        password: formValues.password.trim(),
        checkbox: formValues.checkbox
      }
      axios
          .post("https://expat-journal-bw.herokuapp.com/api/expat/auth/register", newUser)
          .then((response)=>{
            console.log(response)
          })
          .catch(err=> console.log("REGISTRATION ERROR!"))
          .finally(history.push("/dashboard"))
          
  }

  useEffect(()=>{
    schema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [formValues])
  
  return (
    <>
      <h2>Register</h2>

      <div>
        <div>{formErrors.username}</div>
        <div>{formErrors.email}</div>
        <div>{formErrors.password}</div>
        <div>{formErrors.checkbox}</div>
      </div>

      <Form onSubmit={onSubmit}> 
          <FormGroup>
          <Label for="username">Username: </Label>
          <Input type="text" name="username" id="username" value={formValues.username} onChange={regChange} placeholder="enter your username" />
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
            <Input name="checkbox" type="checkbox" value={formValues.checkbox} checked={formValues.checkbox} onChange ={regChange}/>{' '}
            I agree with the terms of service
          </Label>
        </FormGroup>
        <button type="submit" onSubmit={onSubmit} disabled={disabled}>Submit</button>
      </Form>
    </>
  );
}

export default Register;