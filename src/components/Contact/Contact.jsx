import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Section from 'components/Section/Section';
import { Element } from 'react-scroll';

config.autoAddCss = false;

const Wrapper = styled.div`
  display: flex;
`;

const Icon = styled(FontAwesomeIcon)`
  bottom: 3rem;
  font-size: 4.5rem;
  margin: 0rem 1rem;
  transition: all 0.2s ease;
`;

const Link = styled.a`
  color: var(--color-secondary);
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease;
  &:hover {
    color: var(--color-primary);
    transform: scale(1.1);
  }
`;

export const Contact = () => (
  <Element name="contact">
    <Section title="Contacto">
      <Wrapper>
        <Link
          href="https://www.linkedin.com/in/mariaadavazquez/"
          target="_blank"
          rel="noreferrer"
          aria-label="Linkedin Link"
        >
          <Icon icon={faLinkedin} />
        </Link>
        <Link
          href="https://www.instagram.com/mariaadavazquez/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram Link"
        >
          <Icon icon={faInstagram} />
        </Link>
        <Link
          href="https://www.pinterest.es/mariaadavazquez/"
          target="_blank"
          rel="noreferrer"
          aria-label="Telegram Link"
        >
          <Icon icon={faPinterest} />
        </Link>
        <Link
          href="mailto:mariaadavazquez@gmail.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Mail Link"
        >
          <Icon icon={faEnvelopeSquare} />
        </Link>
      </Wrapper>
    </Section>
  </Element>
);
