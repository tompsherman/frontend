import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Register = (props) => {
  return (
    <Form>
        <h2>Register</h2>
        <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="name" id="name" placeholder="enter your name" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Login Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          I agree with the terms of service
        </Label>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}

export default Register;