import React from 'react';
import { useInput } from '../hooks/useInput';
import { connect } from 'react-redux';
import { login } from '../actions/actions';

const Login = ({ history, login }) => {
  const username = useInput();
  const password = useInput();

  const attemptLogin = e => {
    e.preventDefault();
    login({ username: username.value, password: password.value }).then(() => {
      username.setValue('');
      password.setValue('');
      history.push('/');
    });
  };

  // login = e => {
  //   e.preventDefault();
  //   props.login(this.state.credentials)
  //     .then((() => {
  //       // only fires if login call is successful
  //       this.props.history.push('/');
  //     })
  // }

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

export default connect(
  null,
  { login }
)(Login);