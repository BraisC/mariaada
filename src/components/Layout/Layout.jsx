import { useEffect, useState } from 'react';
import 'assets/fonts/fonts.css';
import Header from 'components/Header/Header';
import * as Styled from './styles';

const Layout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 60em)');
    const changeMobile = () => {
      mediaQuery.matches ? setIsMobile(true) : setIsMobile(false);
    };

    changeMobile();
    mediaQuery.addEventListener('change', changeMobile);
    return () => mediaQuery.removeEventListener('change', changeMobile);
  }, []);

  //Fix for height in mobile https://stackoverflow.com/a/50683190
  const appHeight = () => {
    document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`);
  };

  useEffect(() => {
    appHeight();
  }, []);

  const variants = {
    hidden: { width: 0 },
    visible: {
      width: '100%',
      transition: { duration: 0.8, delay: 0.3, delayChildren: 1, staggerChildren: 0.3 },
    },
  };

  return (
    <>
      <Styled.GlobalStyle />
      <Styled.HeaderWrapper initial="hidden" animate="visible" variants={variants}>
        {isMobile ? <Header /> : <Header />}
      </Styled.HeaderWrapper>
      <Styled.Content
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.3 }}
      >
        {children}
      </Styled.Content>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
