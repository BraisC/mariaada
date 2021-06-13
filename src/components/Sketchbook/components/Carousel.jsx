import Slider from 'react-slick';
import '../../../../node_modules/slick-carousel/slick/slick.css';
import '../../../../node_modules/slick-carousel/slick/slick-theme.css';

export const Carousel = ({ children }) => {
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    accesibility: true,
    swipeToSlide: true,
    variableWidth: false,
  };
  return <Slider {...settings}>{children}</Slider>;
};
