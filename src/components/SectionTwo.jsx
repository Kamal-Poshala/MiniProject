import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.pngmart.com/files/11/Shopping-PNG-Photos.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Unlimited Brands</h3>
          <p>Brands upto 30% Off</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.re-thinkingthefuture.com/wp-content/uploads/2021/05/A4177-10-must-have-soft-furnishing-products.jpg
          "
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Decor your Home</h3>
          <p>We give you the best possible options</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.pngitem.com/pimgs/m/247-2474633_transparent-electronics-items-png-png-download.png
          "
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Stay Update</h3>
          <p>
            Stay updated with us and gain unlimited offers.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

