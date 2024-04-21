import React, { useEffect, useState } from 'react';
import { auth, provider } from './config';
import { signInWithPopup } from 'firebase/auth';
import { StyledSignIn, StyledProfile } from './Signin.styled';
import Link from 'next/link';
import Image from 'next/image';

const SignIn = function () {
  const [user, setUser] = useState('');

  const handleClick = async function () {
    try {
      const data = await signInWithPopup(auth, provider);

      const currentUser = {
        firstName: data._tokenResponse.firstName,
        lastName: data._tokenResponse.lastName,
        email: data._tokenResponse.email,
        photo: data._tokenResponse.photoUrl,
      };

      if (!currentUser) return;

      setUser(currentUser);
      const currentUserJSON = JSON.stringify(currentUser);
      localStorage.setItem('currentUser', currentUserJSON);
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  useEffect(() => {
    const currentUserJSON = localStorage.getItem('currentUser');
    const currentUser = JSON.parse(currentUserJSON);
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  return (
    <div>
      {user ? (
        <StyledProfile>
          <Link className="profile-anchor" href="/Profile">
            {user.firstName}
            <Image src={user.photo} height={30} width={30} alt="teste" />
          </Link>
        </StyledProfile>
      ) : (
        <StyledSignIn onClick={handleClick}>Login</StyledSignIn>
      )}
    </div>
  );
};

export default SignIn;
