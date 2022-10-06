import UserAuthContext from "../../store/user-auth-context";
import { signOut, getAuth } from "firebase/auth";
import { useContext } from "react";
import Image from "next/image";

const Dashboard = () => {
  const { user } = useContext(UserAuthContext);
  console.log(user);
  return (
    user ?
    <>
      <h2 className="mt-s20 text-center text-7xl text-white">
        Welcome to the dashboard, {user.displayName}
      </h2>
      <Image width="100%" height="100%" src={user.photoURL}/>
      <button onClick={() => signOut(getAuth())} className="rounded-full bg-blue p-2 text-white md:p-3">
        Sign Out
      </button>
    </> : null

  );
};

export default Dashboard;
