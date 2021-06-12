import { StaticImage } from 'gatsby-plugin-image';
import * as Styled from './styles';

export const Home = () => (
  <Styled.Wrapper>
    <StaticImage
      src="../../assets/images/cover.jpg"
      alt="Portada"
      layout="fullWidth"
      placeholder="tracedSVG"
      quality={100}
      tracedSVGOptions={{ color: '#fecb0d' }}
      style={{ height: '100%' }}
    />
  </Styled.Wrapper>
);
