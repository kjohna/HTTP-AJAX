import React from 'react';

import './Friends.css';

function Friend(props) {
  console.log(props);
  return(
    <div className="friends-container">
      <div className="friend">
        <h2>{props.friendData.name}</h2>
        <div className="friend-info">
          <p>age: {props.friendData.age}</p>
          <p>email: {props.friendData.email}</p>        
        </div>
      </div>
    </div>
  );
}

export default Friend;