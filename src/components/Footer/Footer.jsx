import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

const Wrapper = styled.footer`
  margin-top: 2rem;
`;

const Content = styled.div`
  font-size: 1.4rem;
  margin: 0 auto;
  padding: 4rem 0;
  text-align: center;
`;

const Heart = styled(FontAwesomeIcon)`
  color: red;
  display: inline-block;
`;

export const Footer = () => (
  <Wrapper>
    <Content>
      <span>
        Made with <Heart icon={faHeart} /> by{' '}
        <a
          style={{ textDecorationColor: 'var(--color-primary)', color: 'var(--color-black)' }}
          href="https://braiscao.dev"
        >
          Brais Cao
        </a>{' '}
        ©{new Date().getFullYear()}
      </span>
    </Content>
  </Wrapper>
);
