import React from 'react';
import { Form, FormGroup, Label, Input, Button, Container, Col } from 'reactstrap';

function FriendForm(props) {

  return (
    <Container>
      <Col sm={{size:4, offset:2}}>
        <Form onSubmit={props.isUpdating ? props.updateFriend : props.addFriend}>
          <h2>{props.isUpdating ? `Update Friend!` : `Add New Friend!`}</h2>
          <FormGroup>
            <Label for="name">Friend Name</Label>
            <Input 
              type="text" 
              name="name" 
              id="name" 
              placeholder="Friend name"
              value={props.friendFormData.name}
              onChange={props.handleInput} 
            />
            <Label for="age">Friend Age</Label>
            <Input
              type="number"
              name="age"
              id="age"
              placeholder="Friend age"
              value={props.friendFormData.age}
              onChange={props.handleInput} 
            />
            <Label for="email">Friend Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Friend email"
              value={props.friendFormData.email}
              onChange={props.handleInput} 
            />
            <Button type="submit">{props.isUpdating ? `Update Friend!` : `Add New Friend!`}</Button>
          </FormGroup>
        </Form>
      </Col>
    </Container>
  )
}

export default FriendForm;