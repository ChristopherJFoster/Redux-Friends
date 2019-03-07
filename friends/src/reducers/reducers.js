import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE
} from '../actions/actions';

const initialState = {
  onceOnly: true,
  loggingIn: false,
  fetchingFriends: false,
  addingFriend: false,
  updatingFriend: false,
  deletingFriend: false,
  friends: [],
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loggingIn: true, error: null };
    case LOGIN_SUCCESS:
      return { ...state, loggingIn: false, error: null };
    case LOGIN_FAILURE:
      return { ...state, loggingIn: false, error: action.payload };
    case FETCH_REQUEST:
      return { ...state, fetchingFriends: true, error: null };
    case FETCH_SUCCESS:
      return {
        ...state,
        fetchingFriends: false,
        friends: action.payload,
        error: null
      };
    case FETCH_FAILURE:
      return { ...state, fetchingFriends: false, error: action.payload };
    default:
      return state;
  }
};
