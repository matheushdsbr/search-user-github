import { createContext, useState, useContext } from 'react';

export const UserDataContext = createContext({});

export const UserDataProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

  return (
    <UserDataContext.Provider value={{ user, setUser }}>
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserDataContext = () => useContext(UserDataContext);
