import axios from 'axios';

export const LOGIN_ATTEMPT = 'LOGIN_ATTEMPT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// export const login = (username, password) => {
//   console.log(username);
//   console.log(password);
//   console.log('action!');
// };

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_ATTEMPT });
  return (
    axios
      .post('http://localhost:5000/api/login', creds)
      //   .post('/api/login', creds)
      .then(res => {
        localStorage.setItem('reduxFriendsToken', res.data.payload);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: LOGIN_FAILURE, payload: err.response.message });
      })
  );
};

// export const addTokenToLocalStorage = store => next => action => {
//   if (action.type === LOGIN_SUCCESS) {
//     localStorage.setItem('userToken', action.payload.token);
//   }
//   next(action);
// };
