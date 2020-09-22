import React from 'react'
import {Route, Link, Switch, useHistory} from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

const Login = (props) => {
    const history = useHistory()
    
    const onSubmit = (event) => {
        event.preventDefault()
        history.push("/dashboard")
    }
    
return (
    <Form onSubmit={onSubmit}>
        <h1>Login</h1>
      <FormGroup>
        <Label for="loginEmail">Login Email</Label>
        <Input type="email" name="email" id="loginEmail" placeholder="enter email" />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input type="password" name="password" id="password" placeholder="enter password" />
      </FormGroup>
      <Button  type="submit" onSubmit={onSubmit} >Submit</Button>
    </Form>
  );
}

export default Login;