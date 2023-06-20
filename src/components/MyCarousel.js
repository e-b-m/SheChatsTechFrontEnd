import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Carousel } from "react-bootstrap";

const MyCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("/Users/emma/Documents/she_chats_tech/src/images/carousel-1.png")}
          alt="Image 1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("/Users/emma/Documents/she_chats_tech/src/images/carousel-2.png")}
          alt="Image 2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("/Users/emma/Documents/she_chats_tech/src/images/carousel-3.png")}
          alt="Image 3"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
