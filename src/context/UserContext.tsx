import { createContext, useContext, useState } from 'react';


export const UserContext = createContext<{
  username: string;
  setUsername: (u: string) => void;
}>({
  username: '',
  setUsername: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [username, setUsername] = useState('');
  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
