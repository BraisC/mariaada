import styled from 'styled-components';

export const Wrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 8rem auto;
  max-width: 1240px;
  padding: 0 4rem;
  position: relative;

  &:last-of-type {
    margin-bottom: 6rem;
  }
`;

export const Title = styled.h2`
  font-family: Respondent;
  font-size: 6rem;
  font-weight: 700;
  margin-bottom: 3rem;
`;
