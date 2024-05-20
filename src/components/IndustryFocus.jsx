import React from "react";
import { Card } from "react-bootstrap";

const IndustryFocus = () => {
  const industryFocusArray = [
    {
      image: "/industry-focus/if1.jpeg",
      heading: "Fishing & Aquaculture",
      subtitle: "Providing Great Breeding\nEnvironment",
    },
    {
      image: "/industry-focus/if2.jpeg",
      heading: "Industrial",
      subtitle: "Commitment For Our Industrial\nApplications",
    },
    {
      image: "/industry-focus/if3.jpeg",
      heading: "Mountaineering & Safety",
      subtitle: "UIAA & EN Standard Certified",
    },
    {
      image: "/industry-focus/if4.jpeg",
      heading: "Yachting",
      subtitle: "Engineered Perfection\nFor Your Yacht",
    },
    {
      image: "/industry-focus/if5.jpeg",
      heading: "Sports Nets",
      subtitle: "World Of Sports Nets",
    },
    {
      image: "/industry-focus/if6.jpeg",
      heading: "Shipping",
      subtitle: "MEG4 Approved By DNV",
    },
  ];

  return (
    <div id="infrastructure">
      <h3>World Class Standards For In-House Manufacturing & Research</h3>
      <h2 className="fw-bold">Innovation Centric Industry Focus</h2>
      <div className="d-flex flex-wrap justify-content-around industry-inner">
        {industryFocusArray.map((item, index) => (
          <Card
            key={index}
            style={{
              position: "relative",
              marginBottom: "2rem",
              border: "none",
            }}
            className={`card-responsive px-1 ${
              index === 0 || index === industryFocusArray.length - 1
                ? "width-50"
                : "width-25"
            }`}
          >
            <Card.Img
              variant="top"
              src={item.image}
              style={{ borderRadius: "10px" }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "0",
                left: "0",
                transform: "translate(5%, -10%)",
                textAlign: "left",
                color: "white",
                width: "100%",
              }}
              className="card-div"
            >
              <Card.Title>{item.heading}</Card.Title>
              <Card.Text style={{ fontSize: "13px" }}>
                {item.subtitle.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </Card.Text>
              {/* <Card.Link href="#" className="text-white">
                Read More
              </Card.Link> */}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default IndustryFocus;
