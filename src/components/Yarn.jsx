import React from "react";
import { Carousel } from "react-bootstrap";

const Yarn = ({ yarnImages, yarnDetails }) => {
  return (
    <div className="container">
      <div className="row d-flex align-items-center">
        <h2 className="fw-bold text-danger pt-5">YARN</h2>
        <div className="col-lg-6 p-5">
          {yarnImages.map((twine, index) => (
            <>
              <p className="fw-bold text-secondary font-size-medium-nets">
                {twine.name}
              </p>
              <Carousel interval={2000} fade key={index}>
                {twine.images.map((item, imgIndex) => (
                  <Carousel.Item key={imgIndex}>
                    <img
                      src={item}
                      alt={`Slide ${imgIndex}`}
                      className="width-100 height-100"
                      style={{ borderRadius: "10px" }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </>
          ))}
        </div>
        <div className="col-lg-6">
          <h3 className="fw-bold text-secondary">Product details</h3>
          <p className="font-size-medium-nets">
            {yarnDetails.charAt(0).toUpperCase() +
              yarnDetails.slice(1).toLowerCase()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Yarn;
