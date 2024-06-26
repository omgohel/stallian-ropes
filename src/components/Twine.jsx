import React from "react";
import { Carousel } from "react-bootstrap";

const Twine = ({ twineTypes, twineDetails }) => {
  const applications = [
    "Vessels Fisheries Net",
    "Sea Culturing",
    "Domestic Use",
    "Industrial Applications",
    "Sports Net Application",
    "Construction Safety Net Application",
    "Agricultural Net Application",
    "Packing",
  ];
  return (
    <div className="container" id="twines">
      <div className="row">
        <h2 className="fw-bold text-danger pt-5">TWINE</h2>
        {twineTypes.map((twine, index) => (
          <div className="col-lg-4 nets-responsive px-5" key={index}>
            <Carousel interval={2000} fade>
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
            <p className="fw-bold text-secondary mt-3 font-size-medium-nets">
              {twine.name}
            </p>
          </div>
        ))}
        <div className="col-lg-12">
          <h4 className="fw-bold text-secondary">Product details</h4>
          <p className="font-size-medium">
            {twineDetails.charAt(0).toUpperCase() +
              twineDetails.slice(1).toLowerCase()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Twine;
