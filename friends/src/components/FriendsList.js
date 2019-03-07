import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetch } from '../actions/actions';
import Friend from './Friend';

const FriendsList = ({
  fetch,
  friends,
  onceOnly,
  addFriend,
  editFriend,
  deleteFriend
}) => {
  // Hooks! The [onceOnly] tells React not to run this useEffect more than once: it's essentially a CDM. I tried setting it to friends, but the fetch would trigger upon every render. I wonder if the reason is that friends is an array of objects, and the comparison React makes between the state.friends of the previous and next renders isn't deep enough to see that they're the same, and so the useEffect triggers every time. In any case, I made up a state variable— onceOnly = true —that never changes. With onceOnly passed in here, fetch() is only called once, upon the first render.
  useEffect(() => {
    fetch();
  }, [onceOnly]);

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
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  onceOnly: state.onceOnly,
  friends: state.friends
});

export default connect(
  mapStateToProps,
  { fetch }
)(FriendsList);
