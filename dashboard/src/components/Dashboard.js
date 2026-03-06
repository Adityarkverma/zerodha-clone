import React from "react";
import { Route, Routes } from "react-router-dom";


import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";
import { ToastContainer } from "react-toastify";
import Logout from "./Logout";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = ({username}) => {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <ToastContainer position="top-right" autoClose={2000} />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary username={username}/>} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;