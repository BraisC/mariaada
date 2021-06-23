import { StaticImage } from 'gatsby-plugin-image';
import { SRLWrapper } from 'simple-react-lightbox';
import styled from 'styled-components';

const Texturas = () => (
  <SRLWrapper>
    <div style={{ fontSize: '1.6rem' }}>
      <div style={{ display: 'flex' }}>
        <StaticImage
          src="../../content/portfolio/texturas/pictures/texturas-01.jpg"
          alt="Portada"
          quality={100}
          tracedSVGOptions={{ color: '#fecb0d' }}
          placeholder="tracedSVG"
          style={{ width: '50%', margin: 10 }}
        />
        <StaticImage
          src="../../content/portfolio/texturas/pictures/texturas-02.jpg"
          alt="Portada"
          quality={100}
          tracedSVGOptions={{ color: '#fecb0d' }}
          placeholder="tracedSVG"
          style={{ width: '50%', margin: 10 }}
        />
      </div>

      <div style={{ display: 'flex' }}>
        <StaticImage
          src="../../content/portfolio/texturas/pictures/texturas-03.jpg"
          alt="Portada"
          quality={100}
          tracedSVGOptions={{ color: '#fecb0d' }}
          placeholder="tracedSVG"
          style={{ width: '50%', margin: 10 }}
        />
        <StaticImage
          src="../../content/portfolio/texturas/pictures/texturas-04.jpg"
          alt="Portada"
          quality={100}
          tracedSVGOptions={{ color: '#fecb0d' }}
          placeholder="tracedSVG"
          style={{ width: '50%', margin: 10 }}
        />
      </div>
      <StyledParagraph>
        Chaleco steampunk: Tartán en lana, alcántara y algodón con acabado encerado. (Stella Nine)
      </StyledParagraph>

      <StaticImage
        src="../../content/portfolio/texturas/pictures/texturas-06.jpg"
        alt="Portada"
        quality={100}
        tracedSVGOptions={{ color: '#fecb0d' }}
        placeholder="tracedSVG"
        style={{ margin: 10 }}
      />

      <StaticImage
        src="../../content/portfolio/texturas/pictures/texturas-08.jpg"
        alt="Portada"
        quality={100}
        tracedSVGOptions={{ color: '#fecb0d' }}
        placeholder="tracedSVG"
        style={{ margin: 10 }}
      />
      <div style={{ display: 'flex' }}>
        <StaticImage
          src="../../content/portfolio/texturas/pictures/texturas-09.jpg"
          alt="Portada"
          quality={100}
          tracedSVGOptions={{ color: '#fecb0d' }}
          placeholder="tracedSVG"
          style={{ width: '50%', margin: 10 }}
        />
        <StaticImage
          src="../../content/portfolio/texturas/pictures/texturas-10.jpg"
          alt="Portada"
          quality={100}
          tracedSVGOptions={{ color: '#fecb0d' }}
          placeholder="tracedSVG"
          style={{ width: '50%', margin: 10 }}
        />
      </div>
      <StyledParagraph>
        Camisa algodón de azúcar: terciopelo degradé con textura cesta. (Sila Padín)
      </StyledParagraph>
      <div style={{ display: 'flex' }}>
        <StaticImage
          src="../../content/portfolio/texturas/pictures/texturas-11.jpg"
          alt="Portada"
          quality={100}
          tracedSVGOptions={{ color: '#fecb0d' }}
          placeholder="tracedSVG"
          style={{ width: '50%', margin: 10 }}
        />
        <StaticImage
          src="../../content/portfolio/texturas/pictures/texturas-12.jpg"
          alt="Portada"
          quality={100}
          tracedSVGOptions={{ color: '#fecb0d' }}
          placeholder="tracedSVG"
          style={{ width: '50%', margin: 10 }}
        />
      </div>
      <div style={{ display: 'flex' }}>
        <StaticImage
          src="../../content/portfolio/texturas/pictures/texturas-13.jpg"
          alt="Portada"
          quality={100}
          tracedSVGOptions={{ color: '#fecb0d' }}
          placeholder="tracedSVG"
          style={{ width: '50%', margin: 10 }}
        />
        <StaticImage
          src="../../content/portfolio/texturas/pictures/texturas-14.jpg"
          alt="Portada"
          quality={100}
          tracedSVGOptions={{ color: '#fecb0d' }}
          placeholder="tracedSVG"
          style={{ width: '50%', margin: 10 }}
        />
      </div>

      <StyledParagraph>Capa Snow: Alcántara y trapillo (Breo Alamancos)</StyledParagraph>
    </div>
  </SRLWrapper>
);

export default Texturas;

const StyledParagraph = styled.p`
  margin: 5px 10px;
`;
