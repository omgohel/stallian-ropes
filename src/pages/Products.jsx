import React from "react";
import RopeCaresouls from "../components/RopeCaresouls";
import Header from "../components/Navbar";
import Footer from "../components/Footer";
import ProductsDetails from "../components/ProductsDetails";
import Nets from "../components/Nets";
import Twine from "../components/Twine";
import Yarn from "../components/Yarn";

const Products = () => {
  const productOne = {
    showTitle: true,
    productTitle: "ROPES",
    productName: "HDPE Ropes:",
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
      ["2", "0.41", "0.37", "16", "12.80", "11.69"],
      ["3", "0.60", "0.55", "18", "16.10", "14.71"],
      ["4", "0.81", "0.74", "20", "20", "18.28"],
      ["6", "1.82", "1.66", "22", "24.30", "22.21"],
      ["8", "3.27", "2.98", "24", "29.50", "26.88"],
      ["10", "4.90", "4.47", "28", "39.30", "35.92"],
      ["12", "7.20", "6.58", "32", "52.50", "47.99"],
      ["14", "9.50", "8.68", "<40", "-", "-"],
    ],
    carouselImages: [
      "/hdpe/HDPE-1.jpeg",
      "/hdpe/HDPE-2.jpeg",
      "/hdpe/HDPE-3.jpeg",
      "/hdpe/HDPE-4.jpeg",
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
    productName: "PP ROPES(POLYPROPYLENE ROPE): ",
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
    productName: "POLYESTER(NYLON/BRAIDED): ",
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

  const productFour = {
    productName: "PP MULTIFILLAMENT/COTTON ROPES:",
    productDetails:
      "PP MULTIFILAMENT rope is widely used as a mooring line; it has the same strength either under wet conditions or normal conditions. It is easy operation, has chemical corrosion resistance, drains well, and keeps it in a dark place. ropes are soft, hold knots well, and are suitable for activities like camping, yachting and for hardwork. Their softness makes them suitable ropes for cable railings and industrial uses. They consist of a stronger kind of polypropylene composed of thin, soft fibers which looks similar to nylon. The basic colour is white and is available as twisted as well as braided ropes.",
    tableHeaders: [
      "DIA (MM)",
      "DIA (INCH)",
      "CIR (INCH)",
      "WT. PER 200 MTRS IN KGS",
      "WT. PER 200 MTRS IN KGS",
      "WT. PER 200 MTRS IN LBS",
      "WT. PER 200 MTRS IN LBS",
      "MBL (KGF)",
      "MBL (LBS)",
      "MBL (KN)",
      "MINIMUM LENGTH MTR.",
    ],
    tableData: [
      [
        "6",
        "1/4",
        "3/4",
        "3.92",
        "3.56",
        "8.62",
        "7.83",
        "400",
        "880",
        "4.31",
        "440",
      ],
      [
        "7",
        "9/32",
        "7/8",
        "5.35",
        "4.86",
        "11.76",
        "10.69",
        "600",
        "1320",
        "5.69",
        "500",
      ],
      [
        "8",
        "5/16",
        "1",
        "6.97",
        "6.34",
        "15.34",
        "13.95",
        "700",
        "1540",
        "7.35",
        "500",
      ],
      [
        "9",
        "3/8",
        "1-1/8",
        "8.82",
        "8.02",
        "19.41",
        "17.64",
        "900",
        "1980",
        "9.12",
        "500",
      ],
      [
        "10",
        "13/32",
        "1-1/4",
        "10.89",
        "9.90",
        "23.96",
        "21.78",
        "1100",
        "2420",
        "11.10",
        "450",
      ],
      [
        "11",
        "7/16",
        "1-3/8",
        "13.20",
        "12.00",
        "29.04",
        "26.40",
        "1300",
        "2860",
        "13.20",
        "365",
      ],
      [
        "12",
        "15/32",
        "1-1/2",
        "15.73",
        "14.30",
        "34.61",
        "31.46",
        "1700",
        "3740",
        "16.30",
        "250",
      ],
      [
        "13",
        "1/2",
        "1-5/8",
        "18.04",
        "16.40",
        "39.69",
        "36.08",
        "1900",
        "4180",
        "18.70",
        "2000",
      ],
      [
        "14",
        "9/16",
        "1-3/4",
        "20.90",
        "19.00",
        "45.98",
        "41.80",
        "2200",
        "4840",
        "21.70",
        "2000",
      ],
      [
        "16",
        "5/8",
        "2",
        "27.50",
        "25.00",
        "60.50",
        "55.00",
        "2800",
        "6160",
        "27.80",
        "1500",
      ],
      [
        "18",
        "23/32",
        "2-1/4",
        "34.65",
        "31.50",
        "76.23",
        "69.30",
        "3500",
        "7700",
        "34.50",
        "1200",
      ],
      [
        "19",
        "3/4",
        "2-3/8",
        "38.72",
        "35.20",
        "85.18",
        "77.44",
        "3900",
        "8580",
        "38.30",
        "1000",
      ],
      [
        "20",
        "13/16",
        "2-1/2",
        "42.90",
        "39.00",
        "94.38",
        "85.80",
        "4300",
        "9460",
        "42.10",
        "900",
      ],
      [
        "22",
        "7/8",
        "2-3/4",
        "52.28",
        "47.40",
        "114.95",
        "104.80",
        "5100",
        "11220",
        "50.20",
        "700",
      ],
      [
        "24",
        "15/16",
        "3",
        "62.15",
        "56.50",
        "136.73",
        "124.30",
        "6000",
        "13200",
        "59.00",
        "600",
      ],
      [
        "25",
        "1",
        "3-1/8",
        "67.10",
        "61.00",
        "147.62",
        "134.20",
        "6500",
        "14300",
        "63.30",
        "500",
      ],
      [
        "26",
        "1-1/32",
        "3-1/4",
        "72.00",
        "66.00",
        "159.72",
        "145.20",
        "7000",
        "15400",
        "68.50",
        "450",
      ],
      [
        "28",
        "1-1/8",
        "3-1/2",
        "84.70",
        "77.00",
        "186.34",
        "169.40",
        "8000",
        "17600",
        "78.60",
        "450",
      ],
      [
        "30",
        "1-3/16",
        "3-3/4",
        "96.25",
        "87.50",
        "211.75",
        "192.50",
        "9100",
        "20020",
        "89.30",
        "400",
      ],
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

  const netTypes = [
    {
      name: "HDPE NETS",
      images: [
        "/industry-focus/if2.jpeg",
        "/industry-focus/if3.jpeg",
        "/industry-focus/if4.jpeg",
        "/industry-focus/if5.jpeg",
      ],
    },
    {
      name: "BRAIDED NETS",
      images: [
        "/industry-focus/if2.jpeg",
        "/industry-focus/if3.jpeg",
        "/industry-focus/if4.jpeg",
        "/industry-focus/if5.jpeg",
      ],
    },
    {
      name: "SPORTS/SAFETY NETS",
      images: [
        "/industry-focus/if2.jpeg",
        "/industry-focus/if3.jpeg",
        "/industry-focus/if4.jpeg",
        "/industry-focus/if5.jpeg",
      ],
    },
    {
      name: "NYLON NETS",
      images: [
        "/industry-focus/if2.jpeg",
        "/industry-focus/if3.jpeg",
        "/industry-focus/if4.jpeg",
        "/industry-focus/if5.jpeg",
      ],
    },
  ];

  const productDetails =
    "We have different kind of nets like fishing nets, braided nets (use for high strength), sports net (international cricket, volleyball, football etc), nylon nets. In different size and parameters available in wide range. High quality and durability with UV stabilized.";

  const twineTypes = [
    {
      name: "HDPE TWINE",
      images: [
        "/industry-focus/if2.jpeg",
        "/industry-focus/if3.jpeg",
        "/industry-focus/if4.jpeg",
        "/industry-focus/if5.jpeg",
      ],
    },
    {
      name: "BRAIDED TWINE",
      images: [
        "/industry-focus/if2.jpeg",
        "/industry-focus/if3.jpeg",
        "/industry-focus/if4.jpeg",
        "/industry-focus/if5.jpeg",
      ],
    },
    {
      name: "BALLER TWINE",
      images: [
        "/industry-focus/if2.jpeg",
        "/industry-focus/if3.jpeg",
        "/industry-focus/if4.jpeg",
        "/industry-focus/if5.jpeg",
      ],
    },
  ];
  const twineDetails =
    "Available in 2x3 to 33x3 ply and 0.5-2 mm, also available with attached ropes. We are betrothed in offering an excellent grade gamut of HDPE twine that includes twine HDPE ropes and export quality HDPE twine. This twine is manufactured using the finest class high grade polyethylene and cutting-edge techniques under the strict surveillance of adept professionals. Available in multitude of colors and lengths, this HDPE twine is appreciated to be used in marine, transportation and construction industries.";

  const yarnImages = [
    {
      name: "PP YARN/HDPE YARN/COTTON YARN",
      images: [
        "/industry-focus/if2.jpeg",
        "/industry-focus/if3.jpeg",
        "/industry-focus/if4.jpeg",
        "/industry-focus/if5.jpeg",
      ],
    },
  ];

  const yarnDetails =
    "Yarn is a long continuous length of interlocked fibres, used in sewing, crocheting, knitting, weaving, embroidery, ropemaking, and the production of textiles. Thread is a type of yarn intended for sewing by hand or machine.";
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

      <ProductsDetails
        productName={productFour.productName}
        productDetails={productFour.productDetails}
        tableHeaders={productFour.tableHeaders}
        tableData={productFour.tableData}
        carouselImages={productFour.carouselImages}
        keyFeatures={productFour.keyFeatures}
        keyFeatureText={productFour.keyFeatureText}
      />
      <Nets netTypes={netTypes} productDetails={productDetails} />
      <Twine twineTypes={twineTypes} twineDetails={twineDetails} />
      <Yarn yarnImages={yarnImages} yarnDetails={yarnDetails} />
      <Footer />
    </>
  );
};

export default Products;
