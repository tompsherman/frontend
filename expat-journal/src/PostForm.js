import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const PostForm = (props) => {
  return (
    <Form>
     <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="name" id="name" placeholder="enter your name" />
      </FormGroup>
      <FormGroup>
        <Label for="tagline">Tagline</Label>
        <Input type="text" name="tagline" id="tagline" placeholder="enter your post tagline" />
      </FormGroup>
      <FormGroup>
        <Label for="Country">Country</Label>
        <Input type="text" name="Country" id="Country" placeholder="enter your post Country" />
      </FormGroup>
      <FormGroup>
        <Label for="date">Date</Label>
        <Input type="text" name="date" id="date" placeholder="enter the date of your visit" />
      </FormGroup>
      {/* <FormGroup>
        <Label for="exampleSelect">Select</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup> */}
      <FormGroup>
        <Label for="description">Post Description</Label>
        <Input type="description" name="description" id="description" />
      </FormGroup>
      <FormGroup tag="fieldset">
        <legend>Ratings</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            *****
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            ****
          </Label>
        </FormGroup>
        <FormGroup check disabled>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            ***
          </Label>
        </FormGroup>
        <FormGroup check disabled>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            **
          </Label>
        </FormGroup>
        <FormGroup check disabled>
          <Label check>
            <Input type="radio" name="radio1"  />{' '}
            *
          </Label>
        </FormGroup>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          Make Post Private
        </Label>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}

export default PostForm;