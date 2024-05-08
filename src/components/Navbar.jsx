import React, { useCallback, useState } from "react";
import { Button, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Header = ({ chooseUsRef, contactUsRef, industryFocusRef, homeRef }) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => setIsNavbarOpen(!isNavbarOpen);
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
    <>
      <div className="overlay-navbar">
        <Navbar
          expand="lg"
          className="shadow-sm p-4 navbar-overlay"
          style={{
            backgroundColor: "#edededba",
            borderRadius: "10px",
            position: "relative",
          }}
        >
          <Container>
            <Navbar.Brand onClick={() => scrollToComponent(homeRef)}>
              <div>
                <img
                  alt=""
                  width={130}
                  height={130}
                  src="/maruti.svg"
                  className="d-inline-block align-top brand-image-overlay"
                />
              </div>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={toggleNavbar}
              className={`navbar-toggler ${isNavbarOpen ? "toggled" : ""}`}
            />
            <Navbar.Collapse id="basic-navbar-nav" className="text-right">
              <Nav className="mx-auto">
                <Nav.Link
                  onClick={() => scrollToComponent(chooseUsRef)}
                  className="mx-4 fw-bold black-font"
                >
                  ABOUT US
                </Nav.Link>
                <Nav.Link href="#products" className="mx-4 fw-bold black-font">
                  PRODUCTS
                </Nav.Link>
                <Nav.Link
                  onClick={() => scrollToComponent(industryFocusRef)}
                  className="mx-4 fw-bold black-font"
                >
                  INFRASTRUCTURE
                </Nav.Link>
              </Nav>
              <Button
                onClick={() => scrollToComponent(contactUsRef)}
                className="button-class fw-bold nav-button"
                variant="info"
                size="lg"
              >
                Contact Us
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
