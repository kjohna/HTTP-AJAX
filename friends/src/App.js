import React, { Component } from 'react';
import API from './api';

import Friend from './components/FriendsComponents/Friend';
import FriendForm from './components/FriendsComponents/FriendForm';

import './App.css';

const emptyFriendFormData = {
  name: '',
  age: '',
  email: '' 
  // don't include id, this will prevent new id from being created when a friend is added
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friendsList: null,
      error: '',
      friendFormData: emptyFriendFormData,
      isUpdating: false
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
    // console.log(this.state.friendFormData);
    this.setState( prevState => {
      return {
        friendFormData: {
          ...prevState.friendFormData,
          [e.target.name]: e.target.value
        }
      }
    });
  }

  addFriend = e => {
    e.preventDefault();
    // console.log("addFriend", e);
    API.post("",this.state.friendFormData)
      .then( res => {
        // console.log(res);
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

  updateBtnHandle = (e, id) => {
    console.log("update friend", id);
    // set isUpdating, friendFormData
    this.setState({
      isUpdating: true,
      friendFormData: this.state.friendsList.find( friend => friend.id === id)
    })
  }

  updateFriend = e => {
    e.preventDefault();
    // console.log("send PUT ", this.state.friendFormData.id);
    API.put(`/${this.state.friendFormData.id}`, this.state.friendFormData)
      .then(res => {
        this.setState({
          isUpdating: false,
          friendFormData: emptyFriendFormData,
          friendsList: res.data
        })
      })
      .catch(err => console.log(err))
  }

  deleteFriend = (e, id) => {
    // console.log("send Delete ", id);
    API.delete(`/${id}`)
      .then(res => {
        this.setState({
          friendsList: res.data
        })
      })
      .catch(err => console.log(err))
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
            return (
            <Friend 
              key={friend.id} 
              friendData={friend} 
              updateBtnHandle={this.updateBtnHandle}
              deleteFriend={this.deleteFriend}
            />
            )
          })}
        </div>
        <FriendForm 
          handleInput={this.handleInput} 
          friendFormData={this.state.friendFormData}
          addFriend={this.addFriend}
          updateFriend={this.updateFriend}
          isUpdating={this.state.isUpdating}
        />
      </div>
    );
  }
}

export default App;
