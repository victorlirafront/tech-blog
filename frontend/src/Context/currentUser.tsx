import React, { createContext, useContext, ReactNode, useState } from 'react';

type CurrentUserContextProps = {
  callSetCurrentUser: (a: boolean) => void;
  currentUser: boolean;
}

const CurrentUserContext = createContext<CurrentUserContextProps | undefined>(undefined);

export const useCurrentUser = (): CurrentUserContextProps => {
  const context = useContext(CurrentUserContext);
  if (!context) {
    throw new Error('useCurrentUser must be used within a CurrentUserProvider');
  }
  return context;
};

type CurrentUserProps = {
  children: ReactNode;
}

export const CurrentUserProvider: React.FC<CurrentUserProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false)

  const callSetCurrentUser = (user: boolean) => {
    setCurrentUser(user)

  };

  const contextValue: CurrentUserContextProps = {
    callSetCurrentUser,
    currentUser
  };

  return <CurrentUserContext.Provider value={contextValue}>{children}</CurrentUserContext.Provider>;
};
