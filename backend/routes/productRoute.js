const express = require("express");
const productController = require("../controllers/productController");

const productRouter = express.Router();

productRouter.get("/products", productController.getItems);
productController.post("/products", productController.addItem);
productRouter.patch("/products/:id", productController.updateItem);
productRouter.delete("/products/:id", productController.deleteItem);

module.exports = productRouter;
