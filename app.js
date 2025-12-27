const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");
const { createUser } = require("./api/controllers/user.controller");
const Router = require("./api/routes/Router");

const app = express();
app.use(express.json());
app.use(cors());
app.use('/' , Router)

const mongoURL = "mongodb+srv://reimadjamal_db_user:rmad123@cluster0.8tlg4ss.mongodb.net/"

mongoose.connect(mongoURL);

mongoose.connection.on("connected", () => {
  console.log("mongo connected");
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});
app.get("/", (req, res) => {
  res.status(200).json({
  message:"server is live 🟢"  
  
  });
});



//npm i cors express http mongoose nodemon 
app.get("/main", (req, res) => {
  res.status(200).json({
    name: "rmad",
    age: 14,
  });
});

app.get("/rmad",(req,res)=>{
  res.status(200).json({
    car:"marcedes",
    numberCar:"123323",
    color:"red"
  })
})







app.post("/order", (req, res) => {
  const { order } = req.body;

  if (!order.amount) {
    return res.status(500).json({
      error: true,
      errorMessage: "amount is must",
    });
  }
  res.status(200).json({
    message: "order resived",
    price: order.amount * order.price,
  });
});


module.exports = app;
