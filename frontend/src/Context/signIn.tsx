import { auth, provider } from '../config/firebase';
import { signInWithPopup } from 'firebase/auth';
import React, { createContext, ReactNode, useContext, useState, useEffect } from 'react';

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  photo: string;
}

interface ISignIn {
  handleClick: () => void;
  user: IUser | null;
  isloggedIn: boolean;
}

const SignInContext = createContext<ISignIn | undefined>(undefined);

export const SignInProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isloggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleClick = async () => {
    try {
      const data = await signInWithPopup(auth, provider);
      const currentUser: IUser = {
        firstName: data.user.displayName?.split(' ')[0] || '',
        lastName: data.user.displayName?.split(' ')[1] || '',
        email: data.user.email || '',
        photo: data.user.photoURL || '',
      };

      if (!currentUser) return;

      setUser(currentUser);
      setIsLoggedIn(true);
      const currentUserJSON = JSON.stringify(currentUser);
      localStorage.setItem('currentUser', currentUserJSON);
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  useEffect(() => {
    const currentUserJSON = localStorage.getItem('currentUser');
    if (currentUserJSON) {
      const currentUser: IUser = JSON.parse(currentUserJSON);
      setUser(currentUser);
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <SignInContext.Provider value={{ handleClick, user, isloggedIn }}>
      {children}
    </SignInContext.Provider>
  );
};

export const useSignInContext = () => {
  const context = useContext(SignInContext);
  if (context === undefined) {
    throw new Error('useAddToFavoritsContext must be used within an AddToFavoritsProvider');
  }
  return context;
};
