import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { useInput } from '../utilities/useInput';
import { fetchFriends, editFriend } from '../actions/actions';

const EditFriendForm = ({ fetchFriends, friend, history, editFriend }) => {
  const name = useInput('');
  const age = useInput('');
  const email = useInput('');
  const faveColor = useInput('');
  const faveFood = useInput('');
  const quotation = useInput('');

  useEffect(() => {
    if (!friend) {
      fetchFriends();
    }
  }, []);

  useEffect(() => {
    if (friend) {
      name.setValue(friend.name);
      age.setValue(friend.age);
      email.setValue(friend.email);
      faveColor.setValue(friend.faveColor);
      faveFood.setValue(friend.faveFood);
      quotation.setValue(friend.quotation);
    }
  }, [friend]);

  const requestEditFriend = e => {
    e.preventDefault();
    editFriend({
      id: friend.id,
      name: name.value,
      age: age.value,
      email: email.value,
      faveColor: faveColor.value,
      faveFood: faveFood.value,
      quotation: quotation.value
    }).then(() => {
      history.push('/');
    });
  };

  return (
    <form onSubmit={requestEditFriend}>
      <input
        required
        type='text'
        value={name.value}
        name='name'
        onChange={name.updateValue}
        placeholder='name'
      />
      <input
        type='number'
        value={age.value}
        name='age'
        onChange={age.updateValue}
        placeholder='age (shh...)'
      />
      <input
        type='text'
        value={email.value}
        name='email'
        onChange={email.updateValue}
        placeholder='email address'
      />
      <input
        type='text'
        value={faveColor.value}
        name='faveColor'
        onChange={faveColor.updateValue}
        placeholder='favorite color'
      />
      <input
        type='text'
        value={faveFood.value}
        name='faveFood'
        onChange={faveFood.updateValue}
        placeholder='favorite food'
      />
      <input
        type='text'
        value={quotation.value}
        name='quotation'
        onChange={quotation.updateValue}
        placeholder='quotation'
      />
      <button type='submit'>Submit Friend Edits</button>
      <Link to='/'>
        <button type='submit'>Back to List of Friends</button>
      </Link>
    </form>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    friend: state.friends.filter(
      friend => friend.id === ownProps.match.params.id
    )[0]
  };
};

export default connect(
  mapStateToProps,
  { fetchFriends, editFriend }
)(EditFriendForm);
