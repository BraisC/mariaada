import React from 'react';
import * as Styled from './styles';

const SectionTitle = ({ title, subTitle }) => (
  <>
    <Styled.Title>{title}</Styled.Title>
    <Styled.SubTitle>{subTitle}</Styled.SubTitle>
  </>
);

export default SectionTitle;
