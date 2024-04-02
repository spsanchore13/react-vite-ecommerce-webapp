const express = require("express");
const orderController = require("../controllers/orderController");

const orderRouter = express.Router();

orderRouter.get("/cart", orderController.getCart);
orderRouter.get("/orders", orderController.getOrders);
orderRouter.post("/order", orderController.placeOrder);

module.exports = orderRouter;
