import { createContext, useState } from 'react';

const UserAuthContext = createContext(null);

export const UserAuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
 
  return (
    <UserAuthContext.Provider
      value={{ user, setUser }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserAuthContext;
