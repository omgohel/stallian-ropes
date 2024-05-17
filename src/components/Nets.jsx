import React from "react";
import { Carousel } from "react-bootstrap";

const Nets = ({ netTypes, productDetails }) => {
  return (
    <div className="container">
      <div className="row">
        <h2 className="fw-bold text-danger pt-5">NETS</h2>
        {netTypes.map((net, index) => (
          <div className="col-lg-6 nets-responsive px-5" key={index}>
            <Carousel interval={2000} fade>
              {net.images.map((item, imgIndex) => (
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
            <p className="fw-bold text-secondary mt-3 font-size-medium-nets">
              {net.name}
            </p>
          </div>
        ))}
        <div className="col-lg-12">
          <h2 className="fw-bold text-secondary">Product details</h2>
          <p className="font-size-medium-nets">
            {productDetails.charAt(0).toUpperCase() +
              productDetails.slice(1).toLowerCase()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nets;
