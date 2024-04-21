import React, { useEffect, useState } from 'react';
import { auth, provider } from './config';
import { signInWithPopup } from 'firebase/auth';
import StyledSignIn from './Signin.styled';

const SignIn = function () {
  const [value, setValue] = useState('');

  const handleClick = function () {
    signInWithPopup(auth, provider).then(data => {
      setValue(data.user.email);
      localStorage.setItem('email', data.user.email);
    });
  };

  useEffect(() => {
    // setValue(localStorage.getItem('email'));
  }, [value]);

  return (
    <div>
      {value ? (
        <StyledSignIn>Profile</StyledSignIn>
      ) : (
        <StyledSignIn onClick={handleClick}>Login</StyledSignIn>
      )}
    </div>
  );
};

export default SignIn;
