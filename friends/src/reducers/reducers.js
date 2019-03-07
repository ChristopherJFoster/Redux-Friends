import // UPPERCASE ACTIONS HERE
'../actions/actions';

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

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
