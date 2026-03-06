import React from "react";

function CreateTicket() {
  return (
    <div className="container  mb-3">
      <div className="row p-5  mb-5">
        <h1 className="fs-3 p-5">
          To create a ticket, select a relevant topic
        </h1>
        <div className="col-6 col-lg-4 p-5 mt-2 mb-2">
            <h4 className="pb-3"><i class="fa-solid fa-circle-plus " ></i>&nbsp;Account Opening</h4>
            <ul>
                <a href="" style={{textDecoration:"none",lineHeight:"2.5" }}><li>Rsident individual </li></a>
                <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}><li> Minor</li></a>
                <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}><li>Non Resident Indian (NRI)</li></a>
                <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}><li>Company, Partnership, HUF and LLP</li></a>
                <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}><li>Glossary</li></a>
            </ul>
        </div>
        <div className="col-6 col-lg-4 p-5 mt-2 mb-2">
            <h4 className="pb-3"><i class="fa-regular fa-circle-user"></i>&nbsp;Your Zerodha Account</h4>
            <ul>
                <a href="" style={{textDecoration:"none",lineHeight:"2.5" }}><li>Your Profile </li></a>
                <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}><li> Account modification</li></a>
                <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}><li>Client Master Report (CMR) and Depository Participant (DP)</li></a>
                <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}><li>Nomination</li></a>
                <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}><li>Transfer and conversion of securities</li></a>
            </ul>
        </div>
        <div className="col-6 col-lg-4 p-5 mt-2 mb-2">
            <h4 className="pb-3"><i class="fa-solid fa-circle-chevron-left"></i>&nbsp;Kite</h4>
            <ul>
                <a href="" style={{textDecoration:"none",lineHeight:"2.5" }}><li>IPO</li></a>
                <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}><li>Trading FAQs</li></a>
                <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}><li>Margin Trading Facility (MTF) and Margins</li></a>
                <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}><li>Charts and Orders</li></a>
                <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}><li>Alerts and Nudges</li></a>
                <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}><li>General</li></a>
            </ul>
        </div>
        <div className="col-6 col-lg-4 p-5 mt-2 mb-2">
            <h4 className="pb-3"><i class="fa-solid fa-indian-rupee-sign"></i>&nbsp;Funds</h4>
            <ul>
                <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}><li>Add Money</li></a>
                <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}><li>Withdraw money</li></a>
                <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}><li>Add bank accounts</li></a>
                <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}><li>eMandates</li></a>
            </ul>
        </div>
        <div className="col-6 col-lg-4 p-5 mt-2 mb-2">
            <h4 className="pb-3"><i class="fa-solid fa-circle-radiation"></i>&nbsp;Console</h4>
            <ul>
                <a href="" style={{textDecoration:"none",lineHeight:"2.5" }}><li>Portfolio</li></a>
                <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}><li>Corporate actions</li></a>
                <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}><li>Funds statement</li></a>
                <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}><li>Reports </li></a>
                <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}><li>Profile</li></a>
                <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}><li>Segments</li></a>
            </ul>
        </div>
        <div className="col-6 col-lg-4 p-5 mt-2 mb-2">
            <h4 className="pb-3"><i class="fa-regular fa-circle"></i>&nbsp;Coin</h4>
            <ul>
                <a href="" style={{textDecoration:"none",lineHeight:"2.5" }}><li>Mutual funds</li></a>
                <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}><li>National Pension Scheme(NPS)</li></a>
                <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}><li>Fixed Deposit(FD)</li></a>
                <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}><li>Features on Coin</li></a>
                <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}><li>Payments and Orders</li></a>
                <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}><li>General</li></a>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
