import React from 'react';

export const Login = ({ handleChanges, submitFriendEdits, history }) => {
  return (
    <form onSubmit={e => submitFriendEdits(e, history)}>
      <input
        required
        type='text'
        value={username}
        name='username'
        onChange={handleChanges}
        placeholder='username'
      />
      <input
        type='number'
        value={password}
        name='password'
        onChange={handleChanges}
        placeholder='password'
      />
      <button type='submit'>Submit Friend Edits</button>
    </form>
  );
};
