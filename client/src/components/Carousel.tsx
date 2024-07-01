import React from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CarouselProps } from '../interfaces/carousel.interface';

const defaultSettings: Settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Carousel: React.FC<CarouselProps> = ({ items, renderItem, settings = defaultSettings }) => {
  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <div key={index} className="px-2">
          {renderItem(item, index)}
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
