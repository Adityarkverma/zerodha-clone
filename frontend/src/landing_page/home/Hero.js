import React from "react";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="container p-5 mb-3">
      <div className="row text-center">
        <div>
          <img
            src="media/images/landing.svg"
            alt="Hero Image"
            className="mb-3"
            style={{ width: "60%" }}
          />
        </div>
        <h1 className="mt-5 fs-2 fw-medium" style={{ opacity: "0.85" }}>
          Invest in everything
        </h1>
        <p className="fs-5 mt-2" style={{ opacity: "0.95" }}>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <Link to={"/signup"}>
        <button
          className="p-2 mt-4 btn  fs-5 fw-semibold"
          style={{
            width: "20%",
            margin: "0 auto",
            backgroundColor: "#387ed1",
            color: "white",
          }}
        >
          Sign up for free
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
