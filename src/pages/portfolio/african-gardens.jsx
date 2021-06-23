import Section from 'components/Section/Section';
import { StaticImage } from 'gatsby-plugin-image';
import { SRLWrapper } from 'simple-react-lightbox';
import styled from 'styled-components';

const AfricanGardens = () => (
  <SRLWrapper>
    <Section>
      <StaticImage
        src="../../content/portfolio/african-gardens/pictures/african-gardens-01.jpg"
        alt="Portada"
        quality={100}
        placeholder="tracedSVG"
        tracedSVGOptions={{ color: '#fecb0d' }}
        style={{ margin: 10 }}
      />
      <StaticImage
        src="../../content/portfolio/african-gardens/pictures/african-gardens-02.jpg"
        alt="Portada"
        quality={100}
        placeholder="tracedSVG"
        tracedSVGOptions={{ color: '#fecb0d' }}
        style={{ margin: 10 }}
      />

      <StyledParagraph>
        Mezcla de dos inspiraciones diferentes: la primera aporta un aire delicado y divertido, la
        segunda fuerza y carácter.
      </StyledParagraph>
      <StyledParagraph>
        1. Inspiración en jardines y antiguas láminas botánicas que nos llevan por un camino de
        insectos, flores y linos naturales, en esta idea destaco los cactus y suculentas aplicado en
        tejidos y texturas. Cuento con la presencia de un estampado orgánico con grandes flores en
        tonos verdes, para contraponer con estampados en blanco y negro (óptico y étnico)
      </StyledParagraph>
      <StyledParagraph>
        2. Estética étnica africana, África destaca por su riqueza en colores, artesanías y su
        pasado ancestral que aporta esa fuerza y carácter para contrarestar con la delicadeza de la
        primera parte. Presencia de volantes, abalorios naturales (conchas, nácar), siluetas amplias
        y cómodas, largos tobilleros y asimetrías. Angélica e Isabella captadas por “Vaya Jaleo”
      </StyledParagraph>
      <div style={{ display: 'flex' }}>
        <StaticImage
          src="../../content/portfolio/african-gardens/pictures/african-gardens-03.jpg"
          alt="Portada"
          quality={100}
          placeholder="tracedSVG"
          tracedSVGOptions={{ color: '#fecb0d' }}
          style={{ width: '50%', margin: 10 }}
        />
        <StaticImage
          src="../../content/portfolio/african-gardens/pictures/african-gardens-04.jpg"
          alt="Portada"
          quality={100}
          placeholder="tracedSVG"
          tracedSVGOptions={{ color: '#fecb0d' }}
          style={{ width: '50%', margin: 10 }}
        />
      </div>
      <div style={{ display: 'flex' }}>
        <StaticImage
          src="../../content/portfolio/african-gardens/pictures/african-gardens-05.jpg"
          alt="Portada"
          quality={100}
          placeholder="tracedSVG"
          tracedSVGOptions={{ color: '#fecb0d' }}
          style={{ width: '50%', margin: 10 }}
        />
        <StaticImage
          src="../../content/portfolio/african-gardens/pictures/african-gardens-06.jpg"
          alt="Portada"
          quality={100}
          placeholder="tracedSVG"
          tracedSVGOptions={{ color: '#fecb0d' }}
          style={{ width: '50%', margin: 10 }}
        />
      </div>
      <StaticImage
        src="../../content/portfolio/african-gardens/pictures/african-gardens-08.jpg"
        alt="Portada"
        quality={100}
        placeholder="tracedSVG"
        tracedSVGOptions={{ color: '#fecb0d' }}
        style={{ margin: 10 }}
      />
      <div style={{ display: 'flex' }}>
        <StaticImage
          src="../../content/portfolio/african-gardens/pictures/african-gardens-09.jpg"
          alt="Portada"
          quality={100}
          placeholder="tracedSVG"
          tracedSVGOptions={{ color: '#fecb0d' }}
          style={{ width: '50%', margin: 10 }}
        />
        <StaticImage
          src="../../content/portfolio/african-gardens/pictures/african-gardens-10.jpg"
          alt="Portada"
          quality={100}
          placeholder="tracedSVG"
          tracedSVGOptions={{ color: '#fecb0d' }}
          style={{ width: '50%', margin: 10 }}
        />
      </div>
      <div style={{ display: 'flex' }}>
        <StaticImage
          src="../../content/portfolio/african-gardens/pictures/african-gardens-11.jpg"
          alt="Portada"
          quality={100}
          placeholder="tracedSVG"
          tracedSVGOptions={{ color: '#fecb0d' }}
          style={{ width: '50%', margin: 10 }}
        />
        <StaticImage
          src="../../content/portfolio/african-gardens/pictures/african-gardens-12.jpg"
          alt="Portada"
          quality={100}
          placeholder="tracedSVG"
          tracedSVGOptions={{ color: '#fecb0d' }}
          style={{ width: '50%', margin: 10 }}
        />
      </div>
      <div style={{ display: 'flex' }}>
        <StaticImage
          src="../../content/portfolio/african-gardens/pictures/african-gardens-13.jpg"
          alt="Portada"
          quality={100}
          placeholder="tracedSVG"
          tracedSVGOptions={{ color: '#fecb0d' }}
          style={{ width: '50%', margin: 10 }}
        />
        <StaticImage
          src="../../content/portfolio/african-gardens/pictures/african-gardens-14.jpg"
          alt="Portada"
          quality={100}
          placeholder="tracedSVG"
          tracedSVGOptions={{ color: '#fecb0d' }}
          style={{ width: '50%', margin: 10 }}
        />
      </div>
      <div style={{ display: 'flex' }}>
        <StaticImage
          src="../../content/portfolio/african-gardens/pictures/african-gardens-15.jpg"
          alt="Portada"
          quality={100}
          placeholder="tracedSVG"
          tracedSVGOptions={{ color: '#fecb0d' }}
          style={{ width: '50%', margin: 10 }}
        />
        <StaticImage
          src="../../content/portfolio/african-gardens/pictures/african-gardens-16.jpg"
          alt="16"
          quality={100}
          placeholder="tracedSVG"
          tracedSVGOptions={{ color: '#fecb0d' }}
          style={{ width: '50%', margin: 10 }}
        />
      </div>
      <StaticImage
        src="../../content/portfolio/african-gardens/pictures/african-gardens-17.jpg"
        alt="Portada"
        quality={100}
        placeholder="tracedSVG"
        tracedSVGOptions={{ color: '#fecb0d' }}
        style={{ margin: 10 }}
      />
    </Section>
  </SRLWrapper>
);

export default AfricanGardens;

const StyledParagraph = styled.p`
  font-size: 1.6rem;
  margin: 5px 10px;
  text-align: left;
  width: 100%;
`;
