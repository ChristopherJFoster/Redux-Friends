import axios from 'axios';
import axiosAuth from '../utilities/axiosAuth';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const ADD_FRIEND_REQUEST = 'ADD_FRIEND_REQUEST';
export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS';
export const ADD_FRIEND_FAILURE = 'ADD_FRIEND_FAILURE';

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_REQUEST });
  return axios
    .post('http://localhost:5000/api/login', creds)
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE, payload: err.response.message });
    });
};

export const fetchFriends = () => dispatch => {
  dispatch({ type: FETCH_REQUEST });
  return axiosAuth()
    .get('http://localhost:5000/api/friends')
    .then(res => {
      dispatch({ type: FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err.response.error);
      dispatch({ type: FETCH_FAILURE, payload: err.response.error });
    });
};

export const addFriend = friend => dispatch => {
  console.log('test');
  dispatch({ type: ADD_FRIEND_REQUEST });
  return axiosAuth()
    .post('http://localhost:5000/api/friends', friend)
    .then(res => {
      console.log(res.data);
      dispatch({ type: ADD_FRIEND_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err.response.error);
      dispatch({ type: ADD_FRIEND_FAILURE, payload: err.response.error });
    });
};
