import React, {useState, useEffect} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
const initialFormValues = {
  name: "",
  tagline: "",
  country: "",
  date: "",
  description: "",
  ratings: "5",
  private: false
}
const PostForm = (props) => {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [post, setPost] = useState([])
  const changeHandler = ((event) => {
    const { name, value, type, checked } = event.target
    const valueToUse = type === "checkbox"? checked : value
    setFormValues({...formValues, [name]: valueToUse})
    console.log(name, valueToUse)
  })
  const submitHandler = ((event)=>{
      event.preventDefault();
      const newPost = {
        name: formValues.name.trim(),
        tagline: formValues.tagline.trim(),
        country: formValues.country.trim(),
        date: formValues.date.trim(),
        description: formValues.description.trim(),
        ratings: formValues.ratings,
        private: formValues.private
      }
      // axios 
      //     .post()
      //     .then()
      //     .catch()
  })
  return (
    <Form onSubmit={submitHandler}>
     <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="name" id="name" placeholder="enter your name" onChange={changeHandler}/>
      </FormGroup>
      <FormGroup>
        <Label for="tagline">Tagline</Label>
        <Input type="text" name="tagline" id="tagline" placeholder="enter your post tagline" onChange={changeHandler}/>
      </FormGroup>
      <FormGroup>
        <Label for="country">Country</Label>
        <Input type="text" name="country" id="country" placeholder="enter your post Country" onChange={changeHandler}/>
      </FormGroup>
      <FormGroup>
        <Label for="date">Date</Label>
        <Input type="text" name="date" id="date" placeholder="enter the date of your visit" onChange={changeHandler}/>
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
        <Input type="description" name="description" id="description" onChange={changeHandler}/>
      </FormGroup>
      <FormGroup tag="fieldset">
        <legend>Ratings</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="ratings" value="5" onChange={changeHandler}/>{' '}
            *****
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="ratings" value="4" onChange={changeHandler}/>{' '}
            ****
          </Label>
        </FormGroup>
        <FormGroup check disabled>
          <Label check>
            <Input type="radio" name="ratings" value="3" onChange={changeHandler}/>{' '}
            ***
          </Label>
        </FormGroup>
        <FormGroup check disabled>
          <Label check>
            <Input type="radio" name="ratings" value="2" onChange={changeHandler}/>{' '}
            **
          </Label>
        </FormGroup>
        <FormGroup check disabled>
          <Label check>
            <Input type="radio" name="ratings" value="1" onChange={changeHandler}/>{' '}
            *
          </Label>
        </FormGroup>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input name="private" type="checkbox" onChange={changeHandler}/>{' '}
          Make Post Private
        </Label>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}
export default PostForm;