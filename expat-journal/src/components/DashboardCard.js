import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import styled from 'styled-components'

const DashboardCard = (props) => {
    
    return (
    <StyledMain>
      <Card>
        <div className="card">
        <CardImg className="img" top width="50%" src="https://pullman.accor.com/destinations/country/thailand-1400x788-1.jpg" alt="Card image cap" />
        <CardBody className="cardBody">
          <CardTitle className="title">"{"name"}"</CardTitle>
          <CardSubtitle className="subTitle">"{"tagline"}"</CardSubtitle>
          <CardText className="text">"{"date"}"</CardText>
          <CardText className="text">"{"country"}"</CardText>
          <CardText className="text">{"description"}</CardText>
          <CardText className="text">{"rating"}</CardText>
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

`
export default DashboardCard;
