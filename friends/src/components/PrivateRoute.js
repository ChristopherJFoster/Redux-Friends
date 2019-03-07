import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={routeProps =>
        // STEP IV - check to see if user is authed. If yes, render <Component />
        // else render <Redirect />. Redirect will "redirect" the user to whatever
        // path is supplied to the "to" prop.
        localStorage.getItem('token') ? (
          <Component {...routeProps} />
        ) : (
          <Redirect to='/login' />
        )
      }
    />
  );
};

export default PrivateRoute;
