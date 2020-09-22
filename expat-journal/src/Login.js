import React, {useState} from 'react'
import {Route, Link, Switch, useHistory} from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import axios from "axios"
import * as yup from "yup"
import schema from "./logFormSchema"

const initialFormValues= {
  email: "",
  password: ""
}

const initialFormErrors = {
  email: "",
  password: ""
}

const Login = (props) => {
    const [formValues, setFormValues] = useState (initialFormValues)
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
    
    const logChange = (event) => {
      validate(event.target.name, event.target.value)
      setFormValues({ ...formValues, [event.target.name]: event.target.value})
    }

    const onSubmit = (event) => {
        event.preventDefault()
        axios
          .get()
          .then()
          .catch(err=> console.log("LOGIN ERROR!"))
          .finally()
          history.push("/dashboard")

    }
    
return (
    
    <>
      <h1>Login</h1>

      <div>
          <div>{formErrors.email}</div>
          <div>{formErrors.password}</div>
      </div>
      
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label for="loginEmail">Login Email: </Label>
          <Input type="email" name="email" id="loginEmail" value={formValues.email} onChange={logChange} placeholder="enter email" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password: </Label>
          <Input type="password" name="password" id="password" value={formValues.password} onChange={logChange} placeholder="enter password" />
        </FormGroup>
        <Button  type="submit" onSubmit={onSubmit} >Submit</Button>
      </Form>
    </>
  );
}

export default Login;