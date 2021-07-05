import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Profile, SignIn, SignUp } from './pages';

export const App = () => {
  const { isAuth } = useSelector((state) => state.auth);

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          {isAuth ? <Redirect to="/profile" /> : <SignIn />}
        </Route>
        <Route path="/join" component={SignUp} />
        <Route path="/profile">
          {isAuth ? <Profile /> : <Redirect to="/" />}
        </Route>

        <Route component={() => <h1>Not found</h1>} />
      </Switch>
    </Router>
  );
};
