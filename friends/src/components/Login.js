import React from 'react';
import { useInput } from '../hooks/useInput';
import { connect } from 'react-redux';
import { login } from '../actions/actions';

const Login = () => {
  const username = useInput();
  const password = useInput();

  const attemptLogin = e => {
    e.preventDefault();
    login(username.value, password.value);
    username.setValue('');
    password.setValue('');
  };

  return (
    <form onSubmit={attemptLogin}>
      <input
        required
        type='text'
        value={username.value}
        name='username'
        onChange={username.updateValue}
        placeholder='username'
      />
      <input
        type='text'
        value={password.value}
        name='password'
        onChange={password.updateValue}
        placeholder='password'
      />
      <button type='submit'>Login</button>
    </form>
  );
};

const mapStateToProps = state => ({
  friends: state.friends
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
