import {
  LOGIN_ATTEMPT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../actions/actions';

const initialState = {
  loggingIn: false,
  fetchingFriends: false,
  addingFriend: false,
  updatingFriend: false,
  deletingFriend: false,
  friends: [
    {
      id: 'a4a5c672-9696-4523-b57d-a3db47b6422d',
      name: 'TEST',
      age: 27,
      email: 'TEST@gmail.com',
      faveColor: 'aqua',
      faveFood: 'gravity',
      quotation: 'Islands in the _me_...'
    },
    {
      id: '37b81aec-6af0-426d-9d4c-9fa5cc1e0d8c',
      name: 'DEFAULT',
      age: 23,
      email: 'DEFAULT@gmail.com',
      faveColor: 'parchment',
      faveFood: 'thoughts',
      quotation: 'You may judge me by my cover.'
    }
  ],
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ATTEMPT:
      return { ...state, loggingIn: true, error: null };
    case LOGIN_SUCCESS:
      return { ...state, loggingIn: false, error: null };
    case LOGIN_FAILURE:
      return { ...state, fetching: false, error: action.payload };
    default:
      return state;
  }
};
