import styled from 'styled-components';
import bgLogo from 'assets/images/bg-logo.png';
import { motion } from 'framer-motion';

const Wrapper = styled.header`
  align-items: center;
  display: flex;
  height: 8rem;
  justify-content: space-between;
  padding: 1rem 1rem;
  width: 100%;
  z-index: 4;
`;

const HeaderLogo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  font-family: Celosia;
  font-size: 6rem;
  justify-content: center;
  margin-top: 1.6rem;
  overflow: visible;
  position: relative;
  &::before {
    background-image: url(${bgLogo});
    background-position: center;
    background-size: cover;
    content: '';
    height: 500%;
    left: -2rem;
    position: absolute;
    transform: rotate(-1.8deg);
    width: 150%;
    z-index: -1;
  }
`;

const Menu = styled(motion.div)`
  display: flex;
  margin-top: 15px;
  transform: rotate(-1.2deg);
`;

const MenuOption = styled.p`
  background-color: var(--color-white);
  cursor: pointer;
  font-family: Dynamoe;
  font-size: 2.6rem;
  margin: 0 1rem;
  transition: all 0.1s ease;

  &:nth-child(odd) {
    transform: rotate(-1.6deg);
    &:hover {
      transform: rotate(3.6deg) scale(1.1);
    }
  }
  &:nth-child(even) {
    transform: rotate(1.6deg);
    &:hover {
      transform: rotate(-3.6deg) scale(1.1);
    }
  }
`;

const logoVariants = {
  hidden: { x: '-150%' },
  visible: { x: 0, transition: { type: 'spring', bounce: 0.35 } },
};

const menuVariants = {
  hidden: { y: '-200%' },
  visible: { y: 0 },
};

const Header = () => (
  <>
    <Wrapper>
      <HeaderLogo variants={logoVariants}>Maria Ada</HeaderLogo>
      <Menu variants={menuVariants}>
        <MenuOption>conóceme </MenuOption>
        <MenuOption>portfolio</MenuOption>
        <MenuOption>sketchbook</MenuOption>
        <MenuOption>contacto</MenuOption>
      </Menu>
    </Wrapper>
  </>
);

export default Header;
