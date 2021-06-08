import React from 'react';
import styled from 'styled-components';

const BioText = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 2rem;
  margin-top: 5rem;
  text-align: justify;

  p {
    margin-bottom: 2rem;
  }

  p:last-child {
    border-bottom: 3px solid var(--color-primary);
  }
`;

export const Bio = ({ children }) => <BioText>{children}</BioText>;
