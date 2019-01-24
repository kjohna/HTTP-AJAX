import React from 'react';
import { Card, Button, CardHeader, CardText, Row, Col } from 'reactstrap';

function Friend(props) {
  console.log(props);
  return(
    <Col sm="5">
      <Card body>
        <CardHeader>{props.friendData.name}</CardHeader>
        <CardText>
          age: {props.friendData.age}
        </CardText>
        <CardText>
          email: {props.friendData.email}   
        </CardText>
        <Button size="sm" outline color="danger">
          Delete
        </Button>
      </Card>             
    </Col>
  );
}

export default Friend;