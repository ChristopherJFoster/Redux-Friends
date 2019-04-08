import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchFriends } from '../actions/actions';
import Friend from './Friend';

const FriendsList = ({ fetchFriends, friends }) => {
  useEffect(() => {
    if (friends.length === 0) {
      fetchFriends();
    }
  }, []);

  return (
    <div className='friendslist'>
      <div className='friendslist-header'>
        <h1>My List of Friends</h1>
        <Link to='/addfriendform'>
          <button>Add Friend</button>
        </Link>
      </div>
      <div className='friendslist-content'>
        {friends.map(friend => (
          <Friend key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  friends: state.friends
});

export default connect(
  mapStateToProps,
  { fetchFriends }
)(FriendsList);
