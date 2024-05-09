import React from "react";
import { Accordion, Carousel, Table } from "react-bootstrap";

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
    <div className="container">
      <div className="row d-flex align-items-center p-5">
        <h2 className="fw-bold text-danger">ROPES</h2>
        <div className="col-md-6 product-carousel mt-4 text-left">
          <h4 className="fw-bold">HDPE ROPES :</h4>
          <Carousel interval={2000} className="" fade>
            {chooseUsArray.map((item, index) => (
              <Carousel.Item key={index}>
                <img
                  src={item.image}
                  alt={`Slide ${index}`}
                  className="w-100 h-100"
                  style={{ borderRadius: "10px" }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="col-md-6">
          <div className="row text-left">
            <div className="col-md-6">
              <h4 className="fw-bold text-secondary">Key features</h4>
              <img src="/product/key.jpg" className="product-image" />
            </div>
            <div className="col-md-6">
              <h4 className="fw-bold text-secondary">Product details</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="col-md-12">
              <h4 className="fw-bold text-secondary mb-3">
                Product Specifications
              </h4>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    TECHNICAL DATA CHART (METRIC)
                  </Accordion.Header>
                  <Accordion.Body>
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
                      </tbody>
                    </Table>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex align-items-center p-5">
        <div className="col-md-6 product-carousel mt-4 text-left">
          <h4 className="fw-bold">PDPE ROPES(POLYPROPYLENE ROPE) :</h4>
          <Carousel interval={2000} className="" fade>
            {chooseUsArray.map((item, index) => (
              <Carousel.Item key={index}>
                <img
                  src={item.image}
                  alt={`Slide ${index}`}
                  className="w-100 h-100"
                  style={{ borderRadius: "10px" }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="col-md-6">
          <div className="row text-left">
            <div className="col-md-6">
              <h4 className="fw-bold text-secondary">Key features</h4>
              <img src="/product/key-2.jpg" className="product-image" />
            </div>
            <div className="col-md-6">
              <h4 className="fw-bold text-secondary">Product details</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="col-md-12">
              <h4 className="fw-bold text-secondary mb-3">
                Product Specifications
              </h4>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    TECHNICAL DATA CHART (METRIC)
                  </Accordion.Header>
                  <Accordion.Body>
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
                      </tbody>
                    </Table>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex align-items-center p-5">
        <div className="col-md-6 product-carousel mt-4 text-left">
          <h4 className="fw-bold">POLYSTER(NYLON/BRAIDED) :</h4>
          <Carousel interval={2000} className="" fade>
            {chooseUsArray.map((item, index) => (
              <Carousel.Item key={index}>
                <img
                  src={item.image}
                  alt={`Slide ${index}`}
                  className="w-100 h-100"
                  style={{ borderRadius: "10px" }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="col-md-6">
          <div className="row text-left">
            <div className="col-md-6">
              <h4 className="fw-bold text-secondary">Key features</h4>
              <img src="/product/key-3.jpg" className="product-image" />
            </div>
            <div className="col-md-6">
              <h4 className="fw-bold text-secondary">Product details</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="col-md-12">
              <h4 className="fw-bold text-secondary mb-3">
                Product Specifications
              </h4>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    TECHNICAL DATA CHART (METRIC)
                  </Accordion.Header>
                  <Accordion.Body>
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
                      </tbody>
                    </Table>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex align-items-center p-5">
        <div className="col-md-6 product-carousel mt-4 text-left">
          <h4 className="fw-bold">PP MULTIFILLAMENT/COTTON ROPES :</h4>
          <Carousel interval={2000} className="" fade>
            {chooseUsArray.map((item, index) => (
              <Carousel.Item key={index}>
                <img
                  src={item.image}
                  alt={`Slide ${index}`}
                  className="w-100 h-100"
                  style={{ borderRadius: "10px" }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="col-md-6">
          <div className="row text-left">
            <div className="col-md-6">
              <h4 className="fw-bold text-secondary">Key features</h4>
              <img src="/product/key-4.jpg" className="product-image" />
            </div>
            <div className="col-md-6">
              <h4 className="fw-bold text-secondary">Product details</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="col-md-12">
              <h4 className="fw-bold text-secondary mb-3">
                Product Specifications
              </h4>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    TECHNICAL DATA CHART (METRIC)
                  </Accordion.Header>
                  <Accordion.Body>
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
                      </tbody>
                    </Table>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
