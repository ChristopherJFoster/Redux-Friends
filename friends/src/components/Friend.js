import React from 'react';

export const Friend = ({ friend, editFriend, deleteFriend, history }) => {
  return (
    <div className='friend'>
      <div className='friend-header'>
        <h2>{friend.name}</h2>
        <div className='controls'>
          <button onClick={() => editFriend(friend.id, history)}>
            Edit Friend
          </button>
          <button onClick={() => deleteFriend(friend.id)}>Delete Friend</button>
        </div>
      </div>
      <div className='friend-data'>
        <p>Age: {friend.age}</p>
        <p>Email: {friend.email}</p>
        <p>Color: {friend.color}</p>
        <p>Favorite Food: {friend.favefood}</p>
        <h4>"{friend.quotation}"</h4>
      </div>
    </div>
  );
};

export default Friend;
