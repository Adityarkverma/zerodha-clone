import React, { useState,useContext} from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import { toast } from "react-toastify";
import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  
  const { closeSellWindow } = useContext(GeneralContext);

  const handleSellClick = async () => {
  try {
    const res = await axios.post("http://localhost:3002/sell", {
      name: uid,
      qty: Number(stockQuantity),
      price: Number(stockPrice),
      
    });

    toast.success(res.data.message);

    setTimeout(() => {
      closeSellWindow();
    }, 1500);

  } catch (error) {
    toast.error(
      error.response?.data?.message || "Something went wrong"
    );
  }
};
  const handleCancelClick = () => {
    closeSellWindow();
  };

  return (
    <div className="containerClass" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
          
        </div>
      </div>

      <div className="buttons">
        <div>
          <Link className="btn btn-orange" onClick={handleSellClick}>
            Sell
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;