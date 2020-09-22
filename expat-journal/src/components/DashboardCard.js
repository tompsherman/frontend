import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import styled from 'styled-components'

const DashboardCard = (props) => {
    
    return (
    <div className="card">
      <Card>
        <CardImg top width="50%" src="https://images.unsplash.com/photo-1600678008229-fb5b07b226a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="Card image cap" />
        <CardBody>
          <CardTitle>"{"name"}"</CardTitle>
          <CardSubtitle>"{"tagline"}"</CardSubtitle>
          <CardText>"{"date"}"</CardText>
          <CardText>"{"country"}"</CardText>
          <CardText>{"description"}</CardText>
          <CardText>{"rating"}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};
export default DashboardCard;
