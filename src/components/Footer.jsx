import React, { useCallback } from "react";

const Footer = ({ chooseUsRef, contactUsRef, industryFocusRef }) => {
  const scrollToComponent = useCallback((ref) => {
    if (ref && ref.current) {
      const offsetTop = -140;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = ref.current.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition + offsetTop;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);
  return (
    <div className="footer-bg p-5">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-lg-8 col-md-8">
            <div className="row">
              <div className="col-md-4 col-lg-4 mb-4">
                <img
                  src="/footer/footer.svg"
                  alt="footer"
                  width={120}
                  height={120}
                />
              </div>
              <div className="col-md-4 col-lg-4 mb-4">
                <h5 className="font-white fw-bold">Quick Links</h5>
                <h6
                  className="font-white fw-bold mt-4 cursor"
                  onClick={() => scrollToComponent(chooseUsRef)}
                >
                  About Us
                </h6>
                <h6
                  className="font-white fw-bold mt-4 cursor"
                  onClick={() => scrollToComponent(industryFocusRef)}
                >
                  Infrastructure
                </h6>
                <h6
                  className="font-white fw-bold mt-4 cursor"
                  onClick={() => scrollToComponent(contactUsRef)}
                >
                  Contact Us
                </h6>
              </div>
              <div className="col-md-4 col-lg-4 mb-4">
                <h5 className="font-white fw-bold">Products</h5>
                <h6 className="font-white fw-bold mt-4 cursor">Ropes</h6>
                <h6 className="font-white fw-bold mt-4 cursor">Nets</h6>
                <h6 className="font-white fw-bold mt-4 cursor">Twines</h6>
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
                Kohinoor Ropes Pvt. Ltd. Office No B7, B8 2nd Floor, Prozone
                Trade Center, Cidco, Ch. Sambhajinagar, Aurangabad 431006
                Maharashatra, India
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
              <h6 className="font-white ms-2 mb-0">
                +91 1234567890, +91 0987654321
              </h6>
            </div>
            <div className="d-flex align-items-center mt-4">
              <img
                src="/footer/message.svg"
                alt="footer"
                width={20}
                height={20}
                style={{ color: "white" }}
              />
              <h6 className="font-white ms-2 mb-0">info@kohinoorropes.com</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
