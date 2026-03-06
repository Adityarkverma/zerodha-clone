import React from "react";

function RightSection({ imageURL, productName, productDesc, learnMore }) {
  return (
    <div className="Container">
      <div className="row p-5 ">
        <div className="col-12 col-lg-4 mt-5 pt-5 ">
          <h1 className=" fs-3 text-muted mb-4 " style={{ marginLeft: "10rem" }}>
            {productName}
          </h1>
          <div className="d-flex justify-content-end">
            <p
              style={{
                fontSize: "1.2rem",
                lineHeight: "1.6",
                width: "65%",
                opacity: ".80",
              }}
            >
              {productDesc}
            </p>
          </div>
          <div style={{ marginLeft: "10rem" }}>
            <a href={learnMore}>
              Learn More <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
        <div className="col-12 col-lg-8  text-center">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
