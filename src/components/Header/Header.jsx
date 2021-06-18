import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import * as Styled from './styles';
import { Sidebar } from './components/Sidebar';

const logoVariants = {
  hidden: { x: '-160%' },
  visible: { x: 0, transition: { type: 'spring', bounce: 0.35 } },
};

const menuVariants = {
  hidden: { y: '-250%' },
  visible: { y: 0 },
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const handleClick = () => {
    setIsMenuOpen((v) => !v);
    // I suppose this is fine as it is not React-created DOM
    document.querySelector('body').classList.toggle('noscroll');
  };

  return (
    <>
      <Styled.Wrapper>
        <Styled.HeaderLogo isMobile={isMobile ? 1 : 0} variants={logoVariants}>
          María Adá
        </Styled.HeaderLogo>
        <Styled.Menu isMobile={isMobile ? 1 : 0} variants={menuVariants}>
          {!isMobile ? (
            <>
              <Styled.MenuOption to="about" spy smooth duration={500} offset={-150}>
                conóceme
              </Styled.MenuOption>
              <Styled.MenuOption to="portfolio" spy smooth duration={500} offset={-150}>
                portfolio
              </Styled.MenuOption>
              <Styled.MenuOption to="sketchbook" spy smooth duration={500} offset={-150}>
                sketchbook
              </Styled.MenuOption>
              <Styled.MenuOption to="contact" spy smooth duration={500} offset={-150}>
                contacto
              </Styled.MenuOption>
            </>
          ) : (
            <Styled.MenuMobile onClick={handleClick}>
              {isMenuOpen ? 'Cerrar' : 'Menu'}
            </Styled.MenuMobile>
          )}
        </Styled.Menu>
      </Styled.Wrapper>
      <AnimatePresence>
        {isMenuOpen && <Sidebar key="sidebar" closeMenu={handleClick} />}
      </AnimatePresence>
    </>
  );
};

export default Header;
