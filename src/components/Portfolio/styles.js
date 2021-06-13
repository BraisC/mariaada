import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import craft from 'assets/images/bg-craft.png';

export const PortfolioItem = styled(Link)`
  align-items: center;
  backface-visibility: hidden;
  box-shadow: -3px 4px 8px 0px rgba(20, 20, 20, 0.48);
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
  transform: ${({ rotationMultiplier }) => `rotate(${rotationMultiplier}deg)`};
  transition: all 0.2s ease;
  width: 80%;

  &:hover {
    box-shadow: -8px 9px 15px 0px rgba(20, 20, 20, 0.48);
  }

  &:nth-child(odd) {
    transform: ${({ rotationMultiplier }) => `rotate(${rotationMultiplier}deg)`};
    &:hover {
      transform: rotate(0deg) scale(1.05);
    }
  }
  &:nth-child(even) {
    transform: ${({ rotationMultiplier }) => `rotate(-${rotationMultiplier}deg)`};
    &:hover {
      transform: rotate(0deg) scale(1.05);
    }
  }

  &:not(:last-child) {
    margin-bottom: 4rem;
  }
`;

export const CraftBack = styled.div`
  background-image: url(${craft});
  height: ${({ zoomMultiplier }) => `${zoomMultiplier + 100}%`};
  position: absolute;
  transform: ${({ rotationMultiplier }) => `rotate(${rotationMultiplier * 180}deg)`};
  width: ${({ zoomMultiplier }) => `${zoomMultiplier + 100}%`};
`;

export const Image = styled(GatsbyImage)`
  box-shadow: -2px 3px 20px 0px rgba(20, 20, 20, 0.38);
  margin: 3rem;
`;
