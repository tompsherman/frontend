import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Login = (props) => {
  return (
    <Form>
        <h1>Login</h1>
      <FormGroup>
        <Label for="loginEmail">Login Email</Label>
        <Input type="email" name="email" id="loginEmail" placeholder="enter email" />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input type="password" name="password" id="password" placeholder="enter password" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}

export default Login;