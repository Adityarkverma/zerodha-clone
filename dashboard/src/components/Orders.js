import React  , {useState, useEffect}  from "react";
import { Link } from "react-router-dom";
import axios from 'axios';


const Orders = () => {
  const [allOrders, setAllOrders]=  useState([]);
  useEffect(() => {
  axios
    .get("http://localhost:3002/allOrders", {
      withCredentials: true,
    })
    .then((res) => {
      setAllOrders(res.data);
    })
    .catch((err) => {
      console.log("Error fetching holdings:", err);
    });
}, []);
  return (
    <div className="orders">
      <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Mode</th>
            <th>Qty.</th>
            <th>LTP</th>
            <th>Cur. val</th>
            
          </tr>

          {allOrders.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.mode}</td>
                <td>{stock.qty}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{curValue}</td>
                
              </tr>
            );
          })}
        </table>
      </div>
      
    </div>
  );
};

export default Orders;




