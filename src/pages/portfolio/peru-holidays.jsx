import { StaticImage } from 'gatsby-plugin-image';
import { SRLWrapper } from 'simple-react-lightbox';
import styled from 'styled-components';

const PeruHolidays = () => (
  <SRLWrapper>
    <div style={{ fontSize: '1.6rem' }}>
      <div style={{ display: 'flex' }}>
        <StaticImage
          src="../../content/portfolio/peru-holidays/pictures/peru-holidays-01.jpg"
          alt="Portada"
          quality={100}
          placeholder="tracedSVG"
          tracedSVGOptions={{ color: '#fecb0d' }}
          style={{ width: '50%', margin: 10 }}
        />
        <StaticImage
          src="../../content/portfolio/peru-holidays/pictures/peru-holidays-02.jpg"
          alt="Portada"
          quality={100}
          placeholder="tracedSVG"
          tracedSVGOptions={{ color: '#fecb0d' }}
          style={{ width: '50%', margin: 10 }}
        />
      </div>
      <StyledParagraph>Nos vamos de vacaciones a Perú!</StyledParagraph>
      <StyledParagraph>
        Prepara tus maletas y dile que no llegue tarde como siempre, tenemos una larga lista de
        tareas para aprovechar al máximo nuestra estancia!
      </StyledParagraph>
      <StyledParagraph>
        Hay miles de actividades... entre las ya planeadas contemplaremos desde el festival de Cuzco
        hasta la visita obligada al Machupichu donde exploraremos su enorme biodiversi- dad
        amazónica y acabaremos perdiéndonos en sus coloridos mercados llenos de colorido y exóticas
        frutas, va a ser inolvidable!
      </StyledParagraph>
      <StaticImage
        src="../../content/portfolio/peru-holidays/pictures/peru-holidays-03.jpg"
        alt="Portada"
        quality={100}
        placeholder="tracedSVG"
        tracedSVGOptions={{ color: '#fecb0d' }}
        style={{ margin: 10 }}
      />
      <StaticImage
        src="../../content/portfolio/peru-holidays/pictures/peru-holidays-04.jpg"
        alt="Portada"
        quality={100}
        placeholder="tracedSVG"
        tracedSVGOptions={{ color: '#fecb0d' }}
        style={{ margin: 10 }}
      />
      <div style={{ display: 'flex' }}>
        <StaticImage
          src="../../content/portfolio/peru-holidays/pictures/peru-holidays-05.jpg"
          alt="Portada"
          quality={100}
          placeholder="tracedSVG"
          tracedSVGOptions={{ color: '#fecb0d' }}
          style={{ width: '50%', margin: 10 }}
        />
        <StaticImage
          src="../../content/portfolio/peru-holidays/pictures/peru-holidays-06.jpg"
          alt="Portada"
          quality={100}
          placeholder="tracedSVG"
          tracedSVGOptions={{ color: '#fecb0d' }}
          style={{ width: '50%', margin: 10 }}
        />
      </div>
      <StaticImage
        src="../../content/portfolio/peru-holidays/pictures/peru-holidays-08.jpg"
        alt="Portada"
        quality={100}
        placeholder="tracedSVG"
        tracedSVGOptions={{ color: '#fecb0d' }}
        style={{ margin: 10 }}
      />
      <div style={{ display: 'flex' }}>
        <StaticImage
          src="../../content/portfolio/peru-holidays/pictures/peru-holidays-09.jpg"
          alt="Portada"
          quality={100}
          placeholder="tracedSVG"
          tracedSVGOptions={{ color: '#fecb0d' }}
          style={{ width: '50%', margin: 10 }}
        />
        <StaticImage
          src="../../content/portfolio/peru-holidays/pictures/peru-holidays-10.jpg"
          alt="Portada"
          quality={100}
          placeholder="tracedSVG"
          tracedSVGOptions={{ color: '#fecb0d' }}
          style={{ width: '50%', margin: 10 }}
        />
      </div>
      <div style={{ display: 'flex' }}>
        <StaticImage
          src="../../content/portfolio/peru-holidays/pictures/peru-holidays-11.jpg"
          alt="Portada"
          quality={100}
          placeholder="tracedSVG"
          tracedSVGOptions={{ color: '#fecb0d' }}
          style={{ width: '50%', margin: 10 }}
        />
        <StaticImage
          src="../../content/portfolio/peru-holidays/pictures/peru-holidays-12.jpg"
          alt="Portada"
          quality={100}
          placeholder="tracedSVG"
          tracedSVGOptions={{ color: '#fecb0d' }}
          style={{ width: '50%', margin: 10 }}
        />
      </div>
      <div style={{ display: 'flex' }}>
        <StaticImage
          src="../../content/portfolio/peru-holidays/pictures/peru-holidays-13.jpg"
          alt="Portada"
          quality={100}
          placeholder="tracedSVG"
          tracedSVGOptions={{ color: '#fecb0d' }}
          style={{ width: '50%', margin: 10 }}
        />
        <StaticImage
          src="../../content/portfolio/peru-holidays/pictures/peru-holidays-14.jpg"
          alt="Portada"
          quality={100}
          placeholder="tracedSVG"
          tracedSVGOptions={{ color: '#fecb0d' }}
          style={{ width: '50%', margin: 10 }}
        />
      </div>
      <div style={{ display: 'flex' }}>
        <StaticImage
          src="../../content/portfolio/peru-holidays/pictures/peru-holidays-15.jpg"
          alt="Portada"
          quality={100}
          placeholder="tracedSVG"
          tracedSVGOptions={{ color: '#fecb0d' }}
          style={{ width: '50%', margin: 10 }}
        />
        <StaticImage
          src="../../content/portfolio/peru-holidays/pictures/peru-holidays-16.jpg"
          alt="Portada"
          quality={100}
          placeholder="tracedSVG"
          tracedSVGOptions={{ color: '#fecb0d' }}
          style={{ width: '50%', margin: 10 }}
        />
      </div>
      <StyledParagraph>Carmen XX</StyledParagraph>
      <StyledParagraph>
        PD. Maleta lista, dentro hay una explosión de colores y estampados frutales con los que
        pasaremos “inadvertidas”
      </StyledParagraph>
    </div>
  </SRLWrapper>
);

export default PeruHolidays;

const StyledParagraph = styled.p`
  margin: 5px 10px;
`;
