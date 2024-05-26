import React, { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const containsProducts = location.pathname.includes("products");

  const scrolling = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const scrollToComponent = useCallback(
    (sectionId) => {
      console.log(
        "scrollToComponent called with sectionId:",
        sectionId,
        "containsProducts:",
        containsProducts
      );
      if (containsProducts) {
        navigate("/");
        setTimeout(() => {
          scrolling(sectionId);
        }, 100);
      } else {
        scrolling(sectionId);
      }
    },
    [containsProducts, navigate]
  );

  const scrollToProductComponent = useCallback(
    (sectionId) => {
      console.log(
        "scrollToProductComponent called with sectionId:",
        sectionId,
        "containsProducts:",
        containsProducts
      );
      if (!containsProducts) {
        navigate("/products");
        setTimeout(() => {
          scrolling(sectionId);
        }, 100);
      } else {
        scrolling(sectionId);
      }
    },
    [containsProducts, navigate]
  );

  return (
    <div className="footer-bg p-5">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-lg-8 col-md-8">
            <div className="row">
              <div className="col-md-4 col-lg-4 mb-4 cursor">
                <img
                  src="/stallion-ropes.png"
                  alt="footer"
                  width={130}
                  height={130}
                  onClick={() => scrollToComponent("home")}
                />
              </div>
              <div className="col-md-4 col-lg-4 mb-4">
                <h5 className="font-white fw-bold">Quick Links</h5>
                <h6
                  className="font-white fw-bold mt-4 cursor"
                  onClick={() => scrollToComponent("about")}
                >
                  About Us
                </h6>
                <h6
                  className="font-white fw-bold mt-4 cursor"
                  onClick={() => scrollToComponent("infrastructure")}
                >
                  Infrastructure
                </h6>
                <h6
                  className="font-white fw-bold mt-4 cursor"
                  onClick={() => scrollToComponent("contactUs")}
                >
                  Contact Us
                </h6>
              </div>
              <div className="col-md-4 col-lg-4 mb-4">
                <h5 className="font-white fw-bold">Products</h5>
                <h6
                  className="font-white fw-bold mt-4 cursor"
                  onClick={() => scrollToProductComponent("ropes")}
                >
                  Ropes
                </h6>
                <h6
                  className="font-white fw-bold mt-4 cursor"
                  onClick={() => scrollToProductComponent("nets")}
                >
                  Nets
                </h6>
                <h6
                  className="font-white fw-bold mt-4 cursor"
                  onClick={() => scrollToProductComponent("twines")}
                >
                  Twine
                </h6>
                <h6
                  className="font-white fw-bold mt-4 cursor"
                  onClick={() => scrollToProductComponent("yarn")}
                >
                  Yarn
                </h6>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 text-left">
            <h4 className="font-white">Corporate Office</h4>
            <div className="d-flex mb-3 text-left mt-4">
              <img
                src="/footer/location.svg"
                alt="footer"
                width={30}
                height={30}
                style={{ color: "white" }}
              />
              <h6 className="font-white ms-2 mb-0">
                Kohinoor Ropes Pvt. Ltd. 360/A , G.I.D.C CHITRA , BHAVNAGAR-364004, GUJARAT, INDIA.
              </h6>
            </div>
            <div className="d-flex align-items-center mt-4">
              <img
                src="/footer/telephone-fill.svg"
                alt="footer"
                width={20}
                height={20}
                style={{ color: "white" }}
              />
              <h6 className="font-white ms-2 mb-0">+91 9664624116, +91 9974282410</h6>
            </div>
            <div className="d-flex align-items-center mt-4">
              <img
                src="/footer/message.svg"
                alt="footer"
                width={20}
                height={20}
                style={{ color: "white" }}
              />
              <h6 className="font-white ms-2 mb-0">
                sales@stallionropes.com, mmexports999@gmail.com
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
