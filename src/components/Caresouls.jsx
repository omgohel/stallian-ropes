import React from "react";
import Carousel from "react-bootstrap/Carousel";

const CaresoulsComponent = () => {
  const caresoulArray = [
    {
      image: "/caresouls/Home 1.jpg",
      head: "",
      text: "",
    },
    {
      image: "/caresouls/Home 2.jpg",
      head: "",
      text: "",
    },
    {
      image: "/caresouls/Home 3.jpg",
      head: "",
      text: "",
    },
    {
      image: "/caresouls/slider-2.jpeg",
      head: "",
      text: "",
    },
  ];

  return (
    <div id="home">
      <Carousel interval={2000} fade>
        {caresoulArray.map((item, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100 carousel-image" src={item.image} alt="First slide" />
            <Carousel.Caption>
              <h3>{item.head}</h3>
              <p>{item.text}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CaresoulsComponent;
