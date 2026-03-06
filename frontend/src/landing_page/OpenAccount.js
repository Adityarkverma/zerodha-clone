import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container  p-5 mb-3 ">
      <div className="row text-center">
        <h1 className="mt-5 fs-2 fw-medium" style={{ opacity: "0.85" }}>
          Open a Zerodha account
        </h1>
        <p className="fs-5 mt-3 mb-4" style={{ opacity: "0.75" }}>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
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

export default OpenAccount;
