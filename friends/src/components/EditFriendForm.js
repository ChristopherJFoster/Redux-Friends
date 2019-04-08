import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import { useInput } from '../utilities/useInput';
import { editFriend } from '../actions/actions';

const EditFriendForm = ({ friends, match, history, editFriend }) => {
  const name = useInput('');
  const age = useInput('');
  const email = useInput('');
  const faveColor = useInput('');
  const faveFood = useInput('');
  const quotation = useInput('');

  // Here I use a Hook to set all the form values equal to property values of the friend that the user chose to edit:
  useEffect(() => {
    // This conditional is here to deal with a user reloading the /editfriendform url. Without this conditional (and the conditional Redirect below), a reload on this page causes errors. I'm sure there's a better way to do this, but at least this works for now...
    if (friends.length !== 0) {
      let friend = friends.filter(friend => friend.id === match.params.id)[0];
      name.setValue(friend.name);
      age.setValue(friend.age);
      email.setValue(friend.email);
      faveColor.setValue(friend.faveColor);
      faveFood.setValue(friend.faveFood);
      quotation.setValue(friend.quotation);
    }
  }, []);

  const requestEditFriend = e => {
    e.preventDefault();
    editFriend({
      id: match.params.id,
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

  // See commments above about this conditional Redirect:
  if (friends.length === 0) {
    return <Redirect to='/' />;
  } else {
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
  }
};

// const mapStateToProps = (state, match) => ({
//   friend: state.friends.filter(friend => friend.id === match.params.id)[0]
// });

const mapStateToProps = state => ({
  friends: state.friends
});

export default connect(
  mapStateToProps,
  { editFriend }
)(EditFriendForm);
