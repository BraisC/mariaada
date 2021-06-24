import Section from 'components/Section/Section';
import { StaticImage } from 'gatsby-plugin-image';
import { SRLWrapper } from 'simple-react-lightbox';
import styled from 'styled-components';

const VenusRusa = () => (
  <SRLWrapper>
    <Section>
      <div style={{ display: 'flex' }}>
        <StaticImage
          src="../../content/portfolio/venus-rusa/pictures/venus-rusa-02.jpg"
          alt="Portada"
          quality={100}
          tracedSVGOptions={{ color: '#fecb0d' }}
          placeholder="tracedSVG"
          style={{ width: '50%', margin: 10 }}
        />
        <StaticImage
          src="../../content/portfolio/venus-rusa/pictures/venus-rusa-03.jpg"
          alt="Portada"
          quality={100}
          tracedSVGOptions={{ color: '#fecb0d' }}
          placeholder="tracedSVG"
          style={{ width: '50%', margin: 10 }}
        />
      </div>
      <StyledParagraph>
        Tradicionales ambientes rusos, matrioskas con siluetas amplias y redondeadas que pretenden
        representar la maternidad y fertilidad, semiesferas a modo de pechos y bolsillos en el
        vientre, pliegues en estructura y tejido con el objetivo de crear volúmenes y efectos de
        luz-sombra.
      </StyledParagraph>

      <div style={{ display: 'flex' }}>
        <StaticImage
          src="../../content/portfolio/venus-rusa/pictures/venus-rusa-04.jpg"
          alt="Portada"
          quality={100}
          tracedSVGOptions={{ color: '#fecb0d' }}
          placeholder="tracedSVG"
          style={{ width: '50%', margin: 10 }}
        />
        <StaticImage
          src="../../content/portfolio/venus-rusa/pictures/venus-rusa-06.jpg"
          alt="Portada"
          quality={100}
          tracedSVGOptions={{ color: '#fecb0d' }}
          placeholder="tracedSVG"
          style={{ width: '50%', margin: 10 }}
        />
      </div>

      <StaticImage
        src="../../content/portfolio/venus-rusa/pictures/venus-rusa-08.jpg"
        alt="Portada"
        quality={100}
        tracedSVGOptions={{ color: '#fecb0d' }}
        placeholder="tracedSVG"
        style={{ margin: 10 }}
      />
      <div style={{ display: 'flex' }}>
        <StaticImage
          src="../../content/portfolio/venus-rusa/pictures/venus-rusa-09.jpg"
          alt="Portada"
          quality={100}
          tracedSVGOptions={{ color: '#fecb0d' }}
          placeholder="tracedSVG"
          style={{ width: '50%', margin: 10 }}
        />
        <StaticImage
          src="../../content/portfolio/venus-rusa/pictures/venus-rusa-10.jpg"
          alt="Portada"
          quality={100}
          tracedSVGOptions={{ color: '#fecb0d' }}
          placeholder="tracedSVG"
          style={{ width: '50%', margin: 10 }}
        />
      </div>

      <StaticImage
        src="../../content/portfolio/venus-rusa/pictures/venus-rusa-11.jpg"
        alt="Portada"
        quality={100}
        tracedSVGOptions={{ color: '#fecb0d' }}
        placeholder="tracedSVG"
        style={{ margin: 10 }}
      />
      <StaticImage
        src="../../content/portfolio/venus-rusa/pictures/venus-rusa-12.jpg"
        alt="Portada"
        quality={100}
        tracedSVGOptions={{ color: '#fecb0d' }}
        placeholder="tracedSVG"
        style={{ margin: 10 }}
      />

      <div style={{ display: 'flex' }}>
        <StaticImage
          src="../../content/portfolio/venus-rusa/pictures/venus-rusa-13.jpg"
          alt="Portada"
          quality={100}
          tracedSVGOptions={{ color: '#fecb0d' }}
          placeholder="tracedSVG"
          style={{ width: '50%', margin: 10 }}
        />
        <StaticImage
          src="../../content/portfolio/venus-rusa/pictures/venus-rusa-14.jpg"
          alt="Portada"
          quality={100}
          tracedSVGOptions={{ color: '#fecb0d' }}
          placeholder="tracedSVG"
          style={{ width: '50%', margin: 10 }}
        />
      </div>

      <StaticImage
        src="../../content/portfolio/venus-rusa/pictures/venus-rusa-15.jpg"
        alt="Portada"
        quality={100}
        tracedSVGOptions={{ color: '#fecb0d' }}
        placeholder="tracedSVG"
        style={{ margin: 10 }}
      />
      <StaticImage
        src="../../content/portfolio/venus-rusa/pictures/venus-rusa-16.jpg"
        alt="Portada"
        quality={100}
        tracedSVGOptions={{ color: '#fecb0d' }}
        placeholder="tracedSVG"
        style={{ margin: 10 }}
      />
      <StaticImage
        src="../../content/portfolio/venus-rusa/pictures/venus-rusa-01.jpg"
        alt="Portada"
        quality={100}
        tracedSVGOptions={{ color: '#fecb0d' }}
        placeholder="tracedSVG"
        style={{ margin: 10 }}
      />

      <StyledParagraph>
        Los materiales: encaje de Camariñas teñido a mano de un suave amarillo aporta la delicadeza
        de la infancia combinado con seda salvaje, tapiz plisado y tejido chenilla aterciope- lada
        como tejidos principales. Coleccción Finalista 2014 “Mostra do Encaixe de Camariñas”
      </StyledParagraph>

      <StyledParagraph>
        David Nóvoa y Chus Otero como fotógrafo y directora creativa
      </StyledParagraph>
    </Section>
  </SRLWrapper>
);

export default VenusRusa;

const StyledParagraph = styled.p`
  font-size: 1.6rem;
  margin: 5px 10px;
  text-align: left;
  width: 100%;
`;
