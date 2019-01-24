import React, { Component } from 'react';
import API from './api';

import Friend from './components/FriendsComponents/Friend';
import FriendForm from './components/FriendsComponents/FriendForm';

import './App.css';

const emptyFriendFormData = {
  name: '',
  age: '',
  email: ''
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friendsList: null,
      error: '',
      friendFormData: emptyFriendFormData
    }
  };

  componentDidMount() {
    API.get("")
      .then(res => {
        // console.log(res.data);
        this.setState({ 
          friendsList: res.data,
          error: ''
        });
      })
      .catch(err => {
        console.log("error: ", err.response);
        this.setState({error: err.response});
      });
  }

  handleInput = e => {
    e.persist();
    this.setState( prevState => {
      return {
        friendFormData: {
          ...prevState.friendFormData,
          [e.target.name]: [e.target.value]
        }
      }
    });
  }

  addFriend = e => {
    e.preventDefault();
    console.log("addFriend", e);
    API.post("",this.state.friendFormData)
      .then( res => {
        console.log(res);
        this.setState(
          {
            friendsList: res.data,
            friendFormData: emptyFriendFormData
          }
        );
      })
      .catch( err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="App">
        {/* if error in axios request: */}
        {this.state.error && 
          <h2>Error {this.state.error.status}: "{this.state.error.request.responseURL}" {this.state.error.statusText}
          </h2>
        }          
        {/* if friendsList is populated */}
        <div className="friend-list">
          {this.state.friendsList && this.state.friendsList.map(friend =>{
            return <Friend key={friend.id} friendData={friend} />
          })}
        </div>
        <FriendForm 
          handleInput={this.handleInput} 
          friendFormData={this.state.friendFormData}
          addFriend={this.addFriend} />
      </div>
    );
  }
}

export default App;
