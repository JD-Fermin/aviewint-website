import Header from '../../components/navigation/Header';
import Footer from '../../components/navigation/Footer';
import UserAuthContext from '../../store/user-auth-context';
import { useContext } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
const Dashboard = () => {
  const router = useRouter();
  const { user }  = useContext(UserAuthContext);
  const text = user ? user.email : "User";
 
  
  const signOutUser = async () => {
    await signOut(getAuth());
    router.push("/");

  };
  return (
    <>
      <Header />
      <section className="flex w-full text-4xl">
        <div className="m-auto">
          <h1 className="text-white">DashBoard</h1>
          <h2 className="text-white">Welcome {text}</h2>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={signOutUser}>Sign Out</button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Dashboard;
