import styled from 'styled-components';
import bgLogo from 'assets/images/bg-logo.png';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

export const Wrapper = styled.header`
  align-items: center;
  display: flex;
  height: 8rem;
  justify-content: space-between;
  padding: 1rem 1rem;
  width: 100%;
  z-index: 4;
`;

export const HeaderLogo = styled(motion.p)`
  color: black;
  display: flex;
  flex-direction: column;
  font-family: Virginia;
  font-size: ${(props) => (props.isMobile ? '4rem' : '5rem')};
  justify-content: center;
  margin-top: 1.6rem;
  overflow: visible;
  padding-right: 1rem;
  position: relative;

  &::after {
    background-image: url(${bgLogo});
    background-position: center;
    background-size: cover;
    content: '';
    height: 550%;
    left: -3rem;
    position: absolute;
    transform: rotate(-1.8deg);
    width: 160%;
    z-index: -1;
  }
`;

export const Menu = styled(motion.div)`
  display: flex;
  margin-top: ${(props) => (props.isMobile ? '0' : '1.5rem')};
  transform: rotate(-1.2deg);
`;

export const MenuOption = styled(Link)`
  background-color: var(--color-white);
  cursor: pointer;
  font-family: Dynamoe;
  font-size: 2.6rem;
  line-height: 1;
  margin: 0 1rem;
  transition: all 0.1s ease;

  &:nth-child(odd) {
    transform: rotate(-1.6deg);
    &:hover {
      transform: rotate(0deg) scale(1.1);
    }
  }
  &:nth-child(even) {
    transform: rotate(1.6deg);
    &:hover {
      transform: rotate(0deg) scale(1.1);
    }
  }
`;

export const MenuMobile = styled.p`
  background-color: var(--color-white);
  cursor: pointer;
  font-family: Dynamoe;
  font-size: 2.6rem;
  line-height: 1;
  margin: 0 1rem;
  transition: all 0.1s ease;
`;
