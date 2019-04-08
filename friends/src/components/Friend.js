import React from 'react';
import { Link } from 'react-router-dom';

export const Friend = ({ friend, deleteFriend }) => {
  return (
    <div className='friend'>
      <div className='friend-header'>
        <h2>{friend.name}</h2>
        <div className='controls'>
          <Link to={`/editfriendform/${friend.id}`}>
            <button>Edit Friend</button>
          </Link>
          <button onClick={() => deleteFriend(friend.id)}>Delete Friend</button>
        </div>
      </div>
      <div className='friend-data'>
        <p>Age: {friend.age}</p>
        <p>Email: {friend.email}</p>
        <p>Color: {friend.faveColor}</p>
        <p>Favorite Food: {friend.faveFood}</p>
        <h4>"{friend.quotation}"</h4>
      </div>
    </div>
  );
};

export default Friend;
