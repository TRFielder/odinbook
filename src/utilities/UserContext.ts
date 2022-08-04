import React, { createContext } from 'react';
import UserType from './UserType';

type UserContextType = {
  user: UserType | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
};

const initialUserContextState = {
  user: null,
  setUser: () => {},
};

export const UserContext = createContext<UserContextType>(initialUserContextState);
