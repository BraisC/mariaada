import React from 'react';
import { motion } from 'framer-motion';
import * as Styled from './styles';

const sidebarVariants = {
  close: {
    //transition activated will make the children hide before the sidebar
    y: '-100%',
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.1,
    },
  },
  open: {
    y: '0',
    transition: {
      //when: 'beforeChildren', //this will make the children animate after the sidebar ends animation
      delayChildren: 0.15,
      staggerChildren: 0.1,
    },
  },
};
// These variants execute when the father (sidebar) changes its animation state
const itemVariants = {
  close: { y: '-600px', transition: { duration: 0.1 } },
  open: { y: '0', transition: { duration: 0.1 } },
};

const MenuItem = ({ value, route, closeMenu, ...rest }) => (
  <motion.li key={value} variants={itemVariants}>
    <Styled.MenuLink onClick={closeMenu} to={route} {...rest}>
      {value}
    </Styled.MenuLink>
  </motion.li>
);

export const Sidebar = ({ closeMenu }) => (
  <Styled.Wrapper initial="close" animate="open" exit="close" variants={sidebarVariants}>
    <Styled.Nav>
      <Styled.Menu>
        <MenuItem
          value="Conóceme"
          route="about"
          spy
          smooth
          duration={500}
          offset={-100}
          closeMenu={closeMenu}
        />
        <MenuItem
          value="Portfolio"
          route="portfolio"
          spy
          smooth
          duration={500}
          offset={-100}
          closeMenu={closeMenu}
        />
        <MenuItem
          value="Sketchbook"
          route="sketchbook"
          spy
          smooth
          duration={500}
          offset={-100}
          closeMenu={closeMenu}
        />
        <MenuItem
          value="Contacto"
          route="contact"
          spy
          smooth
          duration={500}
          closeMenu={closeMenu}
        />
      </Styled.Menu>
    </Styled.Nav>
  </Styled.Wrapper>
);
