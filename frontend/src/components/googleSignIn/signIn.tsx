import React, { useEffect, useState } from 'react';
import { auth, provider } from './config';
import { signInWithPopup } from 'firebase/auth';
import { StyledSignIn, StyledProfile } from './Signin.styled';
import Link from 'next/link';
import Image from 'next/image';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  photo: string;
}

const SignIn: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  const handleClick = async () => {
    try {
      const data = await signInWithPopup(auth, provider);

      const currentUser: User = {
        firstName: data.user.displayName?.split(' ')[0] || '',
        lastName: data.user.displayName?.split(' ')[1] || '',
        email: data.user.email || '',
        photo: data.user.photoURL || '',
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
    if (currentUserJSON) {
      const currentUser: User = JSON.parse(currentUserJSON);
      setUser(currentUser);
    }
  }, []);

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
          <button className='button' onClick={handleClick}>Login</button>
        </StyledSignIn>
      )}
    </div>
  );
};

export default SignIn;