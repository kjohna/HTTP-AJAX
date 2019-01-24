import React from 'react';
import { Form, FormGroup, Label, Input, Button, Container, Col } from 'reactstrap';

function FriendForm(props) {

  return (
    <Container>
      <Col sm="4">
        <Form onSubmit={props.addFriend}>
          <h2>Add New Friend!</h2>
          <FormGroup>
            <Label for="name">New Friend Name</Label>
            <Input 
              type="text" 
              name="name" 
              id="name" 
              placeholder="New friend name"
              value={props.friendFormData.name}
              onChange={props.handleInput} 
            />
            <Label for="age">New Friend Age</Label>
            <Input
              type="number"
              name="age"
              id="age"
              placeholder="New friend age"
              value={props.friendFormData.age}
              onChange={props.handleInput} 
            />
            <Label for="email">New Friend Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="New friend email"
              value={props.friendFormData.email}
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