import React from "react";

function Education() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-12 col-md-6  text-center">
          <img src="media\images\education.svg" s />
        </div>
        <div className="col-12 col-lg-6 mt-5 ">
          <h1 className="mb-4 fs-4 ">Free and open market education</h1>
          <p className="mb-3 " style={{ fontSize: "1.1rem", opacity: ".9" }}>
            Varsity, the largest online stock market education book in the world
            <br /> covering everything from the basics to advanced trading.
          </p>
          <a
            href=""
            className="mb-3"
            style={{ textDecoration: "none", fontSize: "1.1rem" }}
          >
            Varsity <i class="fa-solid fa-arrow-right-long"></i>
          </a>
          <p
            className="mt-4 mb-4"
            style={{ fontSize: "1.1rem", opacity: ".9" }}
          >
            TradingQ&A, the most active trading and investment community in
            India <br /> for all your market related queries.
          </p>
          <a href="" style={{ textDecoration: "none", fontSize: "1.1rem" }}>
            TradingQ&A <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
