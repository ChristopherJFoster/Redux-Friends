import axios from 'axios';

export const LOGIN_ATTEMPT = 'LOGIN_ATTEMPT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// export const login = (username, password) => {
//   console.log(username);
//   console.log(password);
//   console.log('action!');
// };

export const login = (username, password) => dispatch => {
  dispatch({ type: LOGIN_ATTEMPT });
  axios
    .post('http://localhost:5000/api/login', {
      username,
      password
    })
    .then(res => dispatch({ type: LOGIN_SUCCESS, payload: res.results }))
    .catch(err => dispatch({ type: LOGIN_FAILURE, payload: err }));
};

// export const addTokenToLocalStorage = store => next => action => {
//   if (action.type === LOGIN_SUCCESS) {
//     localStorage.setItem('userToken', action.payload.token);
//   }
//   next(action);
// };
