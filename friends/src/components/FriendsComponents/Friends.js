import React from 'react';

function Friends(props) {

  return(
    <div className="friends-container">
      <h2>{props.friendData.name}</h2>
    </div>
  );
}

export default Friends;