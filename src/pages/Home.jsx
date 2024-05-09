import React from "react";
import CaresoulsComponent from "../components/Caresouls";
import Service from "../components/Service";
import RopeCaresouls from "../components/RopeCaresouls";
import IndustryFocus from "../components/IndustryFocus";
import Counter from "../components/Counter";
import ChooseUs from "../components/ChooseUs";
import ContactUs from "../components/ContactUs";
import Header from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <div>
        <CaresoulsComponent />
      </div>
      <div className="p-4 service-responsive">
        <Service />
      </div>
      <RopeCaresouls />
      <div className="industry-responsive">
        <IndustryFocus />
      </div>
      <div className="counter-responsive">
        <Counter />
      </div>
      <div className="choose-responsive">
        <ChooseUs />
      </div>
      <div className="contact-responsive">
        <ContactUs />
      </div>
      <Footer />
    </>
  );
};

export default Home;
