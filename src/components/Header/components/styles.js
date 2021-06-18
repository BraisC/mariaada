import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import styled from 'styled-components';

export const Wrapper = styled(motion.div)`
  align-items: center;
  background-color: var(--color-primary);
  display: flex;
  flex-direction: column;
  height: calc(var(--app-height));
  justify-content: center;
  padding: 10rem 8rem;
  position: fixed;
  transition: background-color 0.2s ease, color 0.2s ease;
  width: 100%;
  z-index: -2;
`;

export const Nav = styled.nav`
  font-size: 3.5rem;
  font-weight: 700;
  padding: 1rem;
  text-transform: uppercase;
  transform: translateY(-5rem);
`;

export const Menu = styled.ul`
  text-align: center;

  & li {
    list-style: none;
    margin: 1rem 0;
  }
`;

export const MenuLink = styled(Link)`
  padding: 1.5rem;
`;
