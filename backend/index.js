require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser=  require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/AuthRoute");
const path = require("path");
 const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const {OrdersModel} = require("./model/OrdersModel");
const tradeRoutes = require("./routes/trade");



const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();
mongoose.connect(uri);

app.use(cors({
  origin: true,
  credentials: true
}));
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
app.use("/auth", authRoute);
app.use("/", tradeRoutes);
app.use(express.static(path.join(__dirname, "frontend-build")));
app.use("/kite", express.static(path.join(__dirname, "dashboard-build")));

app.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ success: true });
});

const { userVerification } = require("./middlewares/AuthMiddleware");



app.get("/allHoldings", userVerification, async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions",userVerification,async(req ,res)=>{
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
})

app.get("/allOrders",userVerification,async(req ,res)=>{
  let allOrders = await OrdersModel.find({});
  res.json(allOrders);
})


app.post('/newOrder',async(req,res)=>{
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty : req.body.qty,
    price : req.body.price,
    mode : req.body.mode,
  });
  newOrder.save();
  res.send("Order saved!");
});

app.post('/newHolding',async(req,res)=>{
  let newHolding = new HoldingsModel({
    name: req.body.name,
    qty : req.body.qty,
    avg : req.body.avg,
    price : req.body.price,
    net: req.body.net,
    day : req.body.day,
 


  });
  newHolding.save();
  res.send("Order saved!");
})

app.get(/^\/kite(\/.*)?$/, (req, res) => {
  res.sendFile(path.join(__dirname, "dashboard-build", "index.html"));
});

app.get(/^(?!\/kite).*/, (req, res) => {
  res.sendFile(path.join(__dirname, "frontend-build", "index.html"));
});



app.listen(PORT, () => {
  console.log("App Started!");
});
