import styled from 'styled-components';

export const ImageWrapper = styled.div`
  box-shadow: -3px 4px 8px 0px rgba(20, 20, 20, 0.48);
  position: relative;
  transform: rotate(-2deg);
  width: 30rem;

  img:first-of-type() {
    width: 100%;
  }
`;

export const WashiTape = styled.img`
  position: absolute;
  right: -4rem;
  top: -1rem;
  transform: rotate(25deg);
  width: 15rem;
`;
