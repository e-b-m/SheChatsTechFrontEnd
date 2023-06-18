import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../images/carousel-1.png";
import image2 from "../images/carousel-2.png";
import image3 from "../images/carousel-3.png";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <img
          src={require("/Users/emma/Documents/she_chats_tech/src/images/carousel-1.png")}
          alt="Image 1"
        />
      </div>
      <div>
        <img
          src={require("/Users/emma/Documents/she_chats_tech/src/images/carousel-2.png")}
          alt="Image 2"
        />
      </div>
      <div>
        <img
          src={require("/Users/emma/Documents/she_chats_tech/src/images/carousel-3.png")}
          alt="Image 3"
        />
      </div>
    </Slider>
  );
};

export default Carousel;
