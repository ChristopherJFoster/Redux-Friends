import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { useInput } from '../utilities/useInput';
import { addFriend } from '../actions/actions';

const AddFriendForm = ({ history, addFriend }) => {
  const name = useInput();
  const age = useInput();
  const email = useInput();
  const faveColor = useInput();
  const faveFood = useInput();
  const quotation = useInput();

  const requestAddFriend = e => {
    e.preventDefault();
    addFriend({
      name: name.value,
      age: age.value,
      email: email.value,
      faveColor: faveColor.value,
      faveFood: faveFood.value,
      quotation: quotation.value
    }).then(() => {
      name.setValue('');
      age.setValue('');
      email.setValue('');
      faveColor.setValue('');
      faveFood.setValue('');
      quotation.setValue('');
      history.push('/');
    });
  };

  return (
    <form onSubmit={requestAddFriend}>
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
      <button type='submit'>Add Friend</button>
      <Link to='/'>
        <button type='submit'>Back to List of Friends</button>
      </Link>
    </form>
  );
};

export default connect(
  null,
  { addFriend }
)(AddFriendForm);
