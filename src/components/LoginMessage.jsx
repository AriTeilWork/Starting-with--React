import React from 'react';

export default function LoginMessage(props) {
  return <div>{props.isLoggedIn ? 'Welcome back!' : 'Please log in.'}</div>;
}