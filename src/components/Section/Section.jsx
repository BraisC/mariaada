import React from 'react';
import * as Styled from './styles';

const Section = ({ title, children }) => (
  <Styled.Wrapper>
    <Styled.Title>{title}</Styled.Title>
    {children}
  </Styled.Wrapper>
);
export default Section;
