const { default: styled } = require('styled-components');

export const Wrapper = styled.div`
  height: calc(100vh - 10rem);

  @media only screen and (max-width: 900px) {
    height: calc(var(--app-height) - 10rem);
  }
`;
