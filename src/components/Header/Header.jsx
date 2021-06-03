import * as Styled from './styles';

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
    <Styled.Wrapper>
      <Styled.HeaderLogo variants={logoVariants}>Maria Ada</Styled.HeaderLogo>
      <Styled.Menu variants={menuVariants}>
        <Styled.MenuOption>conóceme </Styled.MenuOption>
        <Styled.MenuOption>portfolio</Styled.MenuOption>
        <Styled.MenuOption>sketchbook</Styled.MenuOption>
        <Styled.MenuOption>contacto</Styled.MenuOption>
      </Styled.Menu>
    </Styled.Wrapper>
  </>
);

export default Header;
