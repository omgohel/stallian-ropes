import React from "react";
import { Carousel } from "react-bootstrap";

const ChooseUs = () => {
  const chooseUsArray = [
    {
      image: "/choose-us/choose-1.png",
    },
    {
      image: "/choose-us/choose-2.png",
    },
    {
      image: "/choose-us/choose-3.png",
    },
    {
      image: "/choose-us/choose-4.png",
    },
  ];
  return (
    <div id="about" className="row d-flex align-items-center">
      <div className="col-lg-6 text-left choose-us-inner">
        <div>
          <h2>Why Choose Us</h2>
          <p>
            Stallion rope is well known for its quality and fast delivery since 1990. We provide
            multiple exports in monthly base. Also make specific products as per customers’
            requirements and in less time period.
          </p>
          <h2>Quality Assurance</h2>
          <p>
            At Stallion Ropes, quality and service are infused into every product we make. Every
            decision we make is intended to improve the quality of our products or our customers’
            experience with Stallion Ropes. Quality assurance is our top priority.
          </p>
        </div>
      </div>
      <div className="col-lg-6">
        <Carousel interval={2000} className="mt-4">
          {chooseUsArray.map((item, index) => (
            <Carousel.Item key={index}>
              <img
                style={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "397px",
                  maxHeight: "191px",
                }}
                src={item.image}
                alt={`Slide ${index}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ChooseUs;
