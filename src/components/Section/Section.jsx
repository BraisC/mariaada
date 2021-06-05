import React from 'react';
import * as Styled from './styles';
import Title from './components/Title/Title';

const Section = ({ title, subTitle, children }) => (
  <Styled.Wrapper>
    <Title title={title} subTitle={subTitle} />
    {children}
  </Styled.Wrapper>
);
export default Section;
