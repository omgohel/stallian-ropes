import React from "react";
import { Carousel, Table } from "react-bootstrap";

const ProductsDetails = ({
  showTitle,
  productTitle,
  productName,
  productDetails,
  tableHeaders,
  tableData,
  carouselImages,
  keyFeatures,
  keyFeatureText,
}) => {
  return (
    <div className="container font-size-small" id="ropes">
      <div
        className={
          showTitle
            ? "row d-flex align-items-start justify-content-center padding-bottom px-5 pt-5"
            : "row d-flex align-items-start justify-content-center padding-bottom px-5"
        }
      >
        {showTitle && <h2 className="fw-bold text-danger">{productTitle}</h2>}
        <div className="col-md-6 mt-4 text-left custom-container">
          <h4 className="fw-bold text-secondary font-size-medium">
            {productName}
          </h4>
          <Carousel interval={2000} fade className="rounded">
            {carouselImages.map((item, index) => (
              <Carousel.Item key={index}>
                <div>
                  <img
                    src={item}
                    alt={`Slide ${index}`}
                    className="product-images"
                  />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="col-md-6 mt-4 custom-container small-display">
          <div className="col-md-12 table-container ">
            <h4 className="fw-bold text-secondary mb-3 font-size-medium">
              Technical Data Chart
            </h4>
            <div>
              <Table responsive striped>
                <thead>
                  <tr>
                    {tableHeaders.map((header, index) => (
                      <th key={index}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((item, index) => (
                        <td key={index}>{item}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-md-6">
            <h4 className="fw-bold text-secondary font-size-medium">
              Key features
            </h4>
            <div className="row">
              {keyFeatures.map((src, index) => (
                <div
                  className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3 mb-3"
                  key={index}
                >
                  <img src={src} className="img-fluid" />
                  <p className="fw-bold text-secondary mt-1">
                    {keyFeatureText[index]}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-6 text-left small-display remove-padding">
            <h4 className="fw-bold text-secondary font-size-medium">
              Product details
            </h4>
            <p>{productDetails}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
