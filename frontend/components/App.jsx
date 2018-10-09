import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SearchContainer from './search/search_container';

const App = () => (
  <div>
    <header>
      <h1>BNBNBNBNBNB</h1>
      <GreetingContainer />
    </header>

    <AuthRoute path='/login' component={LoginFormContainer} />
    <AuthRoute path='/signup' component={SignupFormContainer} />
    <Route exact path="/" component={SearchContainer} />
  </div>
);

export default App;
