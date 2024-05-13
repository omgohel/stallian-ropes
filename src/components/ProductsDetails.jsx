import React from "react";
import { Carousel, Table } from "react-bootstrap";

const ProductsDetails = () => {
  const columnOne = ["3-1/2", "28", "78", "29100.98", "26190.89"];
  const chooseUsArray = [
    {
      image: "/industry-focus/if2.jpeg",
    },
    {
      image: "/industry-focus/if3.jpeg",
    },
    {
      image: "/industry-focus/if4.jpeg",
    },
    {
      image: "/industry-focus/if5.jpeg",
    },
  ];
  return (
    <div className="container font-size-small">
      <div className="row d-flex align-items-end p-5">
        <h2 className="fw-bold text-danger">ROPES</h2>
        <div className="col-md-6 mt-4 text-left custom-container">
          <h4 className="fw-bold text-secondary font-size-medium">
            HDPE Ropes :
          </h4>
          <Carousel interval={2000} className="" fade>
            {chooseUsArray.map((item, index) => (
              <Carousel.Item key={index}>
                <img
                  src={item.image}
                  alt={`Slide ${index}`}
                  className="width-100 height-100"
                  style={{ borderRadius: "10px" }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="col-md-6 custom-container small-display">
          <div className="col-md-12 table-container ">
            <h4 className="fw-bold text-secondary mb-3 font-size-medium">
              Product Specifications
            </h4>
            <div>
              <Table responsive striped>
                <thead>
                  <tr>
                    <th>Cir. in Inches </th>
                    <th>Dia in MM </th>
                    <th>Wt / coil of 220 MTR </th>
                    <th>Unspliced strength </th>
                    <th>Eye spliced strength</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {columnOne.map((item, index) => (
                      <td key={index}>{item}</td>
                    ))}
                  </tr>
                  <tr>
                    {columnOne.map((item, index) => (
                      <td key={index}>{item}</td>
                    ))}
                  </tr>
                  <tr>
                    {columnOne.map((item, index) => (
                      <td key={index}>{item}</td>
                    ))}
                  </tr>
                  <tr>
                    {columnOne.map((item, index) => (
                      <td key={index}>{item}</td>
                    ))}
                  </tr>
                  <tr>
                    {columnOne.map((item, index) => (
                      <td key={index}>{item}</td>
                    ))}
                  </tr>
                  <tr>
                    {columnOne.map((item, index) => (
                      <td key={index}>{item}</td>
                    ))}
                  </tr>
                  <tr>
                    {columnOne.map((item, index) => (
                      <td key={index}>{item}</td>
                    ))}
                  </tr>
                  <tr>
                    {columnOne.map((item, index) => (
                      <td key={index}>{item}</td>
                    ))}
                  </tr>
                  <tr>
                    {columnOne.map((item, index) => (
                      <td key={index}>{item}</td>
                    ))}
                  </tr>
                  <tr>
                    {columnOne.map((item, index) => (
                      <td key={index}>{item}</td>
                    ))}
                  </tr>
                  <tr>
                    {columnOne.map((item, index) => (
                      <td key={index}>{item}</td>
                    ))}
                  </tr>
                  <tr>
                    {columnOne.map((item, index) => (
                      <td key={index}>{item}</td>
                    ))}
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
        <div className="row pt-5 d-flex justify-content-around">
          <div className="col-md-6">
            <h4 className="fw-bold text-secondary font-size-medium">
              Key features
            </h4>
            <div className="row">
              <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3 mb-3">
                <img src="/product/key.jpg" />
              </div>
              <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
                <img src="/product/key.jpg" />
              </div>
              <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
                <img src="/product/key.jpg" />
              </div>
              <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
                <img src="/product/key.jpg" />
              </div>
            </div>
          </div>
          <div className="col-md-6 px-5 text-left small-display remove-padding">
            <h4 className="fw-bold text-secondary font-size-medium">
              Product details
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
