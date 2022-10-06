import '../styles/globals.css';
import { MenuOpenContextProvider } from '../store/menu-open-context';
import { UserAuthContextProvider } from '../store/user-auth-context';
import { useEffect } from 'react';
import Wrapper from './wrapper';
import { app } from '../firebaseConfig';

import AOS from 'aos';
import 'aos/dist/aos.css';
const MyApp = ({ Component, pageProps }) => {
  app();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  useEffect(() => {
    const setViewportHeight = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    setViewportHeight();
    window.onresize = setViewportHeight;
  }, []);

  return (
    <UserAuthContextProvider>
      <Wrapper>
        <MenuOpenContextProvider>
          <Component {...pageProps} />
        </MenuOpenContextProvider>
      </Wrapper>
    </UserAuthContextProvider>
  );
};

export default MyApp;
