import { createContext, useState, useContext } from 'react';

export const UserDataContext = createContext({});

export const UserDataProvider = ({ children }) => {
  const [value, setValue] = useState('');
  const [user, setUser] = useState(undefined);
  const [repos, setRepos] = useState([]);
  const [reposStar, setReposStar] = useState([]);

  return (
    <UserDataContext.Provider value={{
      value, setValue, user, setUser, repos, setRepos, reposStar, setReposStar,
    }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserDataContext = () => useContext(UserDataContext);
