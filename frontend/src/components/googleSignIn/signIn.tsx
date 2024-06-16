import React, { useEffect, useState } from 'react';
import { auth, provider } from './config';
import { signInWithPopup } from 'firebase/auth';
import { StyledSignIn, StyledProfile } from './Signin.styled';
import { useSignInContext } from '@/Context/signIn';
import Link from 'next/link';
import Image from 'next/image';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  photo: string;
}

const SignIn: React.FC = () => {
  const { user, handleClick } = useSignInContext();

  return (
    <div>
      {user ? (
        <StyledProfile>
          <Link className="profile-anchor" href="/Profile">
            {user.firstName}
            <Image src={user.photo} height={30} width={30} alt="Profile Photo" />
          </Link>
        </StyledProfile>
      ) : (
        <StyledSignIn>
          <button className="button" onClick={handleClick}>
            Login
          </button>
        </StyledSignIn>
      )}
    </div>
  );
};

export default SignIn;
