import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import { AddFriendForm } from './components/AddFriendForm';
import { EditFriendForm } from './components/EditFriendForm';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Route path='/login' component={Login} />
        <PrivateRoute exact path='/' component={FriendsList} />
        <PrivateRoute path='/addfriendform' component={AddFriendForm} />
        <PrivateRoute path='/editfriendform' component={EditFriendForm} />
      </div>
    );
  }
}

export default App;
