import React from "react";
import RopeCaresouls from "../components/RopeCaresouls";
import Header from "../components/Navbar";
import Footer from "../components/Footer";
import ProductsDetails from "../components/ProductsDetails";

const Products = () => {
  const productOne = {
    showTitle: true,
    productTitle: "ROPES",
    productName: "HDPE Ropes :",
    productDetails:
      "HDPE ropes are durable ropes with high quality and brighten colors. Water resistant and good abrasion. Good for fisherie sector and lots of industrial kind.",
    tableHeaders: [
      "SIZE (MM)",
      "WEIGHT/ 100METER (KGS)",
      "WEIGHT/ 100YARDS (KGS)",
      "SIZE (MM)",
      "WEIGHT/ 100METER (KGS)",
      "WEIGHT/ 100YARDS (KGS)",
    ],

    tableData: [
      ["2", "-", "-", "16", "12.80", "11.69"],
      ["3", "-", "-", "18", "16.10", "14.71"],
      ["4", "0.81", "0.74", "20", "20", "18.28"],
      ["6", "1.82", "1.66", "22", "24.30", "22.21"],
      ["8", "3.27", "2.98", "24", "29.50", "26.88"],
      ["10", "4.90", "4.47", "28", "39.30", "35.92"],
      ["12", "7.20", "6.58", "32", "52.50", "47.99"],
      ["14", "9.50", "8.68", "<40", "-", "-"],
    ],
    carouselImages: [
      "/industry-focus/if2.jpeg",
      "/industry-focus/if3.jpeg",
      "/industry-focus/if4.jpeg",
      "/industry-focus/if5.jpeg",
    ],
    keyFeatures: [
      "/product/key-1.jpg",
      "/product/key-2.jpg",
      "/product/key-3.jpg",
      "/product/key-4.jpg",
    ],
    keyFeatureText: [
      "High Breaking Strength",
      "UV Stabilized",
      "Highly Durable",
      "Good Abrasian Resistance",
    ],
  };

  const productTwo = {
    productName: "PP ROPES(POLYPROPYLENE ROPE) : ",
    productDetails:
      "Polypropylene rope are used for high breaking strength with UV stabilized. Mainly used in dry/wet cargo, submercible tow, cargo carry, yacht, fishing and many more sector. Floats well and with its chemical resist nature good for many industries. Available in size of 2mm -120mm of 3-strands, 4-strands, 8 & 12 -strands, with different colors and lining.",
    tableHeaders: [
      "SIZE (MM)",
      "WEIGHT/220METER (KGS)",
      "BREAKING STRENGTH/MIN (KGF)",
      "SIZE (MM)",
      "WEIGHT/220METER (KGS)",
      "BREAKING STRENGTH/MIN (KGF)",
    ],
    tableData: [
      ["2", "1.0", "124", "18", "32.1", "4590"],
      ["3", "1.5", "194", "20", "39.8", "5712"],
      ["4", "1.6", "286", "22", "48.2", "6834"],
      ["6", "3.6", "612", "24", "57.2", "8160"],
      ["8", "6.4", "1020", "26", "67.3", "9180"],
      ["10", "9.9", "1530", "28", "77.9", "10812"],
      ["12", "14.3", "2162", "30", "89.5", "12036"],
      ["14", "19.5", "2855", "40", "159.1", "20400"],
      ["16", "25.5", "3824", "<120", "-", "-"],
    ],
    carouselImages: [
      "/industry-focus/if2.jpeg",
      "/industry-focus/if3.jpeg",
      "/industry-focus/if4.jpeg",
      "/industry-focus/if5.jpeg",
    ],
    keyFeatures: [
      "/product/key-1.jpg",
      "/product/key-2.jpg",
      "/product/key-3.jpg",
      "/product/key-4.jpg",
    ],
    keyFeatureText: [
      "High Breaking Strength",
      "UV Stabilized",
      "Highly Durable",
      "Good Abrasian Resistance",
    ],
  };

  const productThree = {
    productName: "POLYESTER(NYLON/BRAIDED) : ",
    productDetails:
      "Polyester ropes available in size of 6-40 mm and with use of tremendous range. Polyester ropes are keenly used for boating/yachting applications and is great for anchor lines, mooring lines, fender lines, lifelines and hoisting and winching lines. Polyester ropes are also used for theatre applications quite often for stage rigging and curtain hoists etc.",
    tableHeaders: [
      "SIZE (MM)",
      "WEIGHT/220METER (KGS)",
      "BREAKING STRENGTH MIN(KGF)",
    ],
    tableData: [
      ["6", "5.9", "560"],
      ["8", "10.5", "1020"],
      ["10", "16.7", "1590"],
      ["12", "24.0", "2270"],
      ["14", "32.5", "3180"],
      ["16", "42.9", "4060"],
      ["18", "53.9", "5080"],
      ["20", "66.6", "6350"],
      ["22", "80.0", "7160"],
      ["24", "96.0", "9100"],
      ["<40", "-", "-"],
    ],
    carouselImages: [
      "/industry-focus/if2.jpeg",
      "/industry-focus/if3.jpeg",
      "/industry-focus/if4.jpeg",
      "/industry-focus/if5.jpeg",
    ],
    keyFeatures: [
      "/product/key-1.jpg",
      "/product/key-2.jpg",
      "/product/key-3.jpg",
      "/product/key-4.jpg",
    ],
    keyFeatureText: [
      "High Breaking Strength",
      "UV Stabilized",
      "Highly Durable",
      "Good Abrasian Resistance",
    ],
  };
  return (
    <>
      <Header />
      <div className="rope-responsive">
        <RopeCaresouls />
      </div>
      <ProductsDetails
        showTitle={productOne.showTitle}
        productTitle={productOne.productTitle}
        productName={productOne.productName}
        productDetails={productOne.productDetails}
        tableHeaders={productOne.tableHeaders}
        tableData={productOne.tableData}
        carouselImages={productOne.carouselImages}
        keyFeatures={productOne.keyFeatures}
        keyFeatureText={productOne.keyFeatureText}
      />
      <ProductsDetails
        productName={productTwo.productName}
        productDetails={productTwo.productDetails}
        tableHeaders={productTwo.tableHeaders}
        tableData={productTwo.tableData}
        carouselImages={productTwo.carouselImages}
        keyFeatures={productTwo.keyFeatures}
        keyFeatureText={productTwo.keyFeatureText}
      />

      <ProductsDetails
        productName={productThree.productName}
        productDetails={productThree.productDetails}
        tableHeaders={productThree.tableHeaders}
        tableData={productThree.tableData}
        carouselImages={productThree.carouselImages}
        keyFeatures={productThree.keyFeatures}
        keyFeatureText={productThree.keyFeatureText}
      />

      <Footer />
    </>
  );
};

export default Products;
