import React from 'react';
import { StyledSignIn, StyledProfile } from './Signin.styled';
import { useSignInContext } from '@/Context/signIn';
import Link from 'next/link';
import Image from 'next/image';

const SignIn: React.FC = () => {
  const { user, handleClick } = useSignInContext();

  return (
    <div>
      {user ? (
        <StyledProfile>
          <Link className="profile-anchor" href="/Profile">
            Profile
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
