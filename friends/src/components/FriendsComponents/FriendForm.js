import React from 'react';
import { Form, FormGroup, Label, Input, Button, Container, Col } from 'reactstrap';

function FriendForm(props) {

  return (
    <Container>
      <Col sm="4">
        <Form onSubmit={props.addFriend}>
          <h2>Add New Friend!</h2>
          <FormGroup>
            <Label for="friendName">New Friend Name</Label>
            <Input 
              type="text" 
              name="friendName" 
              id="friendName" 
              placeholder="New friend name"
              value={props.friendFormData.friendName}
              onChange={props.handleInput} 
            />
            <Label for="friendAge">New Friend Age</Label>
            <Input
              type="number"
              name="friendAge"
              id="friendAge"
              placeholder="New friend age"
              value={props.friendFormData.friendAge}
              onChange={props.handleInput} 
            />
            <Label for="friendEmail">New Friend Email</Label>
            <Input
              type="email"
              name="friendEmail"
              id="friendEmail"
              placeholder="New friend email"
              value={props.friendFormData.friendEmail}
              onChange={props.handleInput} 
            />
            <Button type="submit">Add New Friend!</Button>
          </FormGroup>
        </Form>
      </Col>
    </Container>
  )
}

export default FriendForm;