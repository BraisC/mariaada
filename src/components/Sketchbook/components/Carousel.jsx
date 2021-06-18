import Slider from 'react-slick';
import { StaticImage } from 'gatsby-plugin-image';
import '../../../../node_modules/slick-carousel/slick/slick.css';
import '../../../../node_modules/slick-carousel/slick/slick-theme.css';

const NextArrow = ({ onClick }) => (
  <div onClick={onClick}>
    <StaticImage
      src="../../../assets/images/arrow.png"
      alt="Portada"
      layout="fullWidth"
      quality={100}
      tracedSVGOptions={{ color: '#fecb0d' }}
      style={{
        right: '-4rem',
        position: 'absolute',
        top: '50%',
        display: 'block',
        width: '3rem',
        height: 'auto',
        padding: '0',
        transform: 'translate(0, -50%)',
        cursor: 'pointer',
        zIndex: '2',
        filter: 'drop-shadow(-2px 2px 2px rgba(20, 20, 20, 0.48))',
      }}
    />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div onClick={onClick}>
    <StaticImage
      src="../../../assets/images/arrow.png"
      alt="Portada"
      layout="fullWidth"
      placeholder="tracedSVG"
      quality={100}
      tracedSVGOptions={{ color: '#fecb0d' }}
      style={{
        left: '-3.8rem',
        position: 'absolute',
        top: '50%',
        display: 'block',
        width: '3rem',
        height: 'auto',
        padding: '0',
        transform: 'translate(0, -50%) rotate(180deg)',
        cursor: 'pointer',
        zIndex: '2',
        filter: 'drop-shadow(2px -2px 2px rgba(20, 20, 20, 0.48))',
      }}
    />
  </div>
);

export const Carousel = ({ children }) => {
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    accesibility: true,
    swipeToSlide: true,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <Slider {...settings} style={{ width: '95%' }}>
      {children}
    </Slider>
  );
};
