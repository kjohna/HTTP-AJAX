import React, { Component } from 'react';
import axios from 'axios';

import Friends from './components/FriendsComponents/Friends';

import './App.css';

class App extends Component {
  state = {
    friendsList: null,
    error: ''
  };

  componentDidMount() {
    axios.get("http://localhost:5000/friends")
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

  render() {
    return (
      <div className="App">
        {/* if error in axios request: */}
        {this.state.error && 
          <h2>Error {this.state.error.status}: {this.state.error.request.responseURL} {this.state.error.statusText}
          </h2>
        }          
        {/* if friendsList is populated */}
        {this.state.friendsList && this.state.friendsList.map(friend =>{
          return <Friends key={friend.id} friendData={friend} />
        })}
      </div>
    );
  }
}

export default App;
