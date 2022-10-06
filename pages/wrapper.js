import UserAuthContext from '../store/user-auth-context';
import { useContext } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const Wrapper = ({ children }) => {
  const { setUser } = useContext(UserAuthContext);

  onAuthStateChanged(getAuth(), async (user) => {
    await setUser(user);
  });
  return <>{children}</>;
};

export default Wrapper;
