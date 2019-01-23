import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    friendsList: [],
    error: ''
  };

  componentDidMount() {
    axios.get("http://localhost:5000/friends")
      .then(res => {
        console.log(res.data);
        this.setState({ 
          friendsList: res,
          error: ''
        });
      })
      .catch(err => {
        console.log(err.response.data);
        this.setState({error: err.response.data});
      });
  }

  render() {
    return (
      <div className="App">
        Hello
      </div>
    );
  }
}

export default App;
