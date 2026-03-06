const express = require("express");
const router = express.Router();

const { HoldingsModel: Holding } = require("../model/HoldingsModel");
const { OrdersModel: Order } = require("../model/OrdersModel");
router.post("/buy", async (req, res) => {
  try {
    console.log("Buy");
    const { name, qty, price } = req.body;

    // Validation
    if (!name || !qty || !price) {
      return res.status(400).json({ message: "Missing fields" });
    }

    // Check if holding already exists
    const existingHolding = await Holding.findOne({ name });

    if (existingHolding) {
      // Calculate new total quantity
      const totalQty = existingHolding.qty + qty;

      // Calculate new average price
      const newAvg =
        ((existingHolding.qty * existingHolding.avg) +
          (qty * price)) / totalQty;

      existingHolding.qty = totalQty;
      existingHolding.avg = newAvg;
      existingHolding.price = price;

      await existingHolding.save();

    } else {
      // Create new holding
      await Holding.create({
        name,
        qty,
        avg: price,
        price,
        net: "0%",
        day: "0%",
      });
    }

    // Create order entry
    await Order.create({
      name,
      mode: "BUY",
      qty,
      price,
      
    });

    res.status(200).json({
      message: "Stock bought successfully",
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
});



router.post("/sell", async (req, res) => {
  try {
    const { name, qty, price } = req.body;

    if (!name || !qty || !price) {
      return res.status(400).json({ message: "Missing fields" });
    }

    const holding = await Holding.findOne({ name });

    if (!holding) {
      return res.status(404).json({ message: "Stock not found in holdings" });
    }

    // Not enough quantity
    if (holding.qty < qty) {
      return res.status(400).json({
        message: "Not enough quantity to sell",
      });
    }

    holding.qty -=qty;
    // Exact quantity → delete
    if (holding.qty === 0) {
      await Holding.deleteOne({ name });
    }else{
        holding.price = price;
        await holding.save();
    }


    // Create SELL order
    await Order.create({
      name,
      mode: "SELL",
      qty,
      price,
      
    });

    res.status(200).json({ message: "Stock sold successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
