import React, { useCallback, useState } from "react";
import { Button, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const toggleNavbar = () => setIsNavbarOpen(!isNavbarOpen);
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

  return (
    <div className="overlay-navbar">
      <Navbar
        expand="lg"
        className="shadow-sm p-4 navbar-overlay"
        style={{
          backgroundColor: "rgba(237, 237, 237, 0.80)",
          borderRadius: "10px",
          position: "relative",
        }}
      >
        <Container>
          <Navbar.Brand onClick={() => scrollToComponent("home")}>
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
                onClick={() => scrollToComponent("about")}
                className="mx-4 fw-bold black-font"
              >
                ABOUT US
              </Nav.Link>
              <Nav.Link href="/products" className="mx-4 fw-bold black-font">
                PRODUCTS
              </Nav.Link>
              <Nav.Link
                onClick={() => scrollToComponent("infrastructure")}
                className="mx-4 fw-bold black-font"
              >
                INFRASTRUCTURE
              </Nav.Link>
            </Nav>
            <Button
              onClick={() => scrollToComponent("contactUs")}
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
  );
};

export default Header;
