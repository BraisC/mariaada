import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';
import bgHeader from 'assets/images/bg-header.png';

export const GlobalStyle = createGlobalStyle`
  
  :root {
    --app-height: 100%;
  }
  * {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent; /* Avoid blue square on tapping */
  }
   html {
    font-size: 62.5%; 
    box-sizing: border-box;
    --color-white: #f4f4f4;
    --color-black: #0A2027;
    --color-primary: #fecb0d;
    --color-translucid: #0a2027d8;
    @media only screen and (max-width: 75em){
        font-size: 56.25%;
    }
    @media only screen and (max-width: 56.25em) {
        font-size: 50%;
    }
   }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 500;
    line-height: 1.2;
    word-wrap: break-word;
    font-kerning: normal;
    background-color: var(--color-white);
    -moz-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    -ms-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    -webkit-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    font-feature-settings: 'kern', 'liga', 'clig', 'calt';
  }
  ::-moz-selection { background: var(--color-primary); }
  ::selection { background: var(--color-primary); }
  .noscroll{
    overflow: hidden;
  }

  .slick-slider {
 box-shadow: -3px 4px 8px 0px rgba(20, 20, 20, 0.48);
  }
`;

export const Content = styled(motion.main)`
  margin: 0 auto;
  padding-top: 10rem;

  @media only screen and (max-width: 900px) {
    padding-top: 8rem;
  }
`;

export const HeaderWrapper = styled(motion.div)`
  height: 10rem;
  position: fixed;
  width: 100%;
  z-index: 4;

  &::before {
    background-image: url(${bgHeader});
    background-size: auto 100%;
    content: '';
    height: 100%;
    position: absolute;
    transform: rotate(0.4deg);
    width: 110%;
    z-index: -1;
  }

  @media only screen and (max-width: 900px) {
    height: 8rem;
  }
`;
