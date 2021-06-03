import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: calc(100vh - 10rem);

  @media only screen and (max-width: 900px) {
    height: calc(var(--app-height) - 10rem);
  }
`;

export const Home = () => (
  <Wrapper>
    <StaticImage
      src="../../assets/images/cover.jpg"
      alt="Portada"
      layout="fullWidth"
      placeholder="tracedSVG"
      tracedSVGOptions={{ color: '#fecb0d' }}
      style={{ height: '100%' }}
    />
  </Wrapper>
);
