import React from "react";
import RopeCaresouls from "../components/RopeCaresouls";
import Header from "../components/Navbar";
import Footer from "../components/Footer";
import ProductsDetails from "../components/ProductsDetails";

const Products = () => {
  return (
    <>
      <Header />
      <div className="rope-responsive">
        <RopeCaresouls />
      </div>
      <ProductsDetails />
      <Footer />
    </>
  );
};

export default Products;
