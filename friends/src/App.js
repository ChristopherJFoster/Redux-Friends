import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { Login } from './components/Login';
import FriendsList from './components/FriendsList';
import { AddFriendForm } from './components/AddFriendForm';
import { EditFriendForm } from './components/EditFriendForm';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Route path='/login' comoponent={Login} />
        <Route exact path='/' component={FriendsList} />
        <Route path='/addfriendform' component={AddFriendForm} />
        <Route path='/editfriendform' component={EditFriendForm} />
      </div>
    );
  }
}

export default App;
