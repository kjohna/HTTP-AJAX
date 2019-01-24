import React from 'react';
import { Card, Button, CardHeader, CardText, Row, Col } from 'reactstrap';

function Friend(props) {
  // console.log(props);
  return(
    <Row>
      <Col lg="12">
        <Card body>
          <CardHeader>{props.friendData.name}</CardHeader>
          <CardText>
            age: {props.friendData.age}
          </CardText>
          <CardText>
            email: {props.friendData.email}   
          </CardText>
          <Col sm={{size:'auto', offset:2}}>
            <Button 
              size="sm" 
              outline 
              color="primary"
              onClick={e => props.updateBtnHandle(e, props.friendData.id)}
            >
              Update
            </Button>
            <Button 
              size="sm" 
              outline color="danger"
              onClick={e => props.deleteFriend(e, props.friendData.id)}
            >
              Delete
            </Button>
          </Col>
        </Card>
      </Col>
    </Row>
  );
}

export default Friend;