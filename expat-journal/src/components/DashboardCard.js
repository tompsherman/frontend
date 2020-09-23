import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import styled from 'styled-components'

const DashboardCard = ({post}) => {
    
  const deleteEntry = ()=> {
   return(
       <>
       </>
   )
  }

    return (
    <StyledMain>
      <Card onSubmit={deleteEntry}>
        <div className="card">
        
        {/* {post.map((item)=>(
          <div key={item.id}>
            {item.image} 
            {item.name}
            {item.title}
            {item.location}
            {item.rating}
            {item.contact}
            {item.date}
            <button onSubmit={deleteEntry}>Delete Entry</button>
          </div>
        ))} */}

        <CardImg className="img" top width="50%" src="https://pullman.accor.com/destinations/country/thailand-1400x788-1.jpg" alt="Card image cap" />
        <CardBody className="cardBody">
          <CardTitle className="title">{"name"}</CardTitle>
          <br />
          <CardSubtitle className="subTitle">{"tagline"}</CardSubtitle>
          <CardText className="text">{"date"}</CardText>
          <CardText className="text">{"country"}</CardText>
          <CardText className="text">{"description"}</CardText>
          <CardText className="text">{"rating"}</CardText>
          <button onSubmit={deleteEntry}>Delete Entry</button>
          <br />
          <br />
        </CardBody>
        </div>
      </Card>
    </StyledMain>
  );
};

const StyledMain = styled.main `
 .card {
    border: 2.5px solid #9bc1bc; 
    font-family: 'Nunito', sans-serif;
  }

  .cardText {
    font-family: 'Nunito', sans-serif;
  }

  .img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .cardBody {
    text-align: center;
    font-family: 'Rock Salt', cursive;
    font-family: 'Nunito', sans-serif;
  }

  button {
        border-radius: 5px;
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

`
export default DashboardCard;
