import React from 'react';
import styled from 'styled-components';
import bg from 'assets/images/bg-button.png';

const StyledButton = styled.a`
  color: var(--color-white);
  cursor: pointer;
  display: inline-block;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.8rem;
  font-weight: 500;
  padding: 2.4rem 3rem;
  position: relative;
  text-decoration: none;
  transition: all 0.2s ease;
`;

const StyledBg = styled.img`
  filter: drop-shadow(-2px 2px 2px rgba(20, 20, 20, 0.48));
  height: 100%;
  object-fit: cover;
  position: absolute;
  width: 100%;
`;

const StyledWrapper = styled.div`
  position: relative;
  transition: all 0.2s ease;
  &:hover {
    box-shadow: -8px 9px 15px 0px rgba(20, 20, 20, 0.48);
    transform: scale(1.1);
  }
  &:active {
    box-shadow: none;
    transform: scale(1.02);
  }
`;

export const Button = ({ children, className, ...props }) => (
  <StyledWrapper>
    <StyledBg src={bg} />
    <StyledButton className={className} {...props}>
      {children}
    </StyledButton>
  </StyledWrapper>
);
