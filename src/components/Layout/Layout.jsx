import { useEffect } from 'react';
import 'assets/fonts/fonts.css';
import Header from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import * as Styled from './styles';

const Layout = ({ children }) => {
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
        <Header />
      </Styled.HeaderWrapper>
      <Styled.Content
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.3 }}
      >
        {children}
      </Styled.Content>
      <Footer />
    </>
  );
};

export default Layout;
