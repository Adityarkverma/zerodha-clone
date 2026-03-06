import React from "react";
import {Link} from "react-router-dom";

function Team() {
  return (
    <div className="container mt-5">
      <div className="row border-top   p-5">
        <h1 className="fs-2 text-center " style={{ opacity: ".85" }}>
          People
        </h1>
      </div>
      <div className="row p-5">
        <div
          className="col-12 col-lg-6  text-center text-muted"
          style={{ lineHeight: "2", fontSize: "1.1rem" }}
        >
          <img
            src="media/images/nithinKamath.jpg"
            style={{ borderRadius: "100%",width:"60%" }}
          />
          <h4 className="mt-3">Nithin Kamath</h4>
          <h5 >Foundr, CEO</h5>
        </div>
        <div
          className="col-12 col-lg-6 mt-3"
          style={{ lineHeight: "1.9", fontSize: "1.1rem" }}
        >
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
           He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>
            Playing basketball is his zen.
          </p>
          <p>
            Connect on <Link to="/">Homepage </Link>/ <a href="" style={{textDecoration:"none"}}>TradingQnA </a>/ <a href="" style={{textDecoration:"none"}}>Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
