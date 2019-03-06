import React from 'react';
import Friend from './Friend';

import { connect } from 'react-redux';

const FriendsList = ({
  friends,
  addFriend,
  editFriend,
  deleteFriend,
  history
}) => {
  return (
    <div className='friendslist'>
      <div className='friendslist-header'>
        <h1>My List of Friends</h1>
        <button onClick={addFriend}>Add Friend</button>
      </div>
      <div className='friendslist-content'>
        {friends.map(friend => (
          <Friend
            key={friend.id}
            friend={friend}
            editFriend={editFriend}
            deleteFriend={deleteFriend}
            history={history}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({ friends: state.friends });

export default connect(
  mapStateToProps,
  null
)(FriendsList);
