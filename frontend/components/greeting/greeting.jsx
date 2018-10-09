import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
  const loggedIn = () => (
    <div>
      <h2>Welcome, {currentUser.username}!</h2>
      <button onClick={logout}>Log Out</button>
    </div>
  );

  const loggedOut = () => (
    <div>
      <Link to="/signup" >Sign Up</Link>
      <Link to="/login" >Log In</Link>
    </div>
  )

  if (currentUser) {
    return loggedIn()
  } else {
    return loggedOut()
  }
}

export default Greeting;
