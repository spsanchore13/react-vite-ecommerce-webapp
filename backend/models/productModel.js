const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
  },
  brand: String,
  title: String,
  color: String,
  discountedPrice: Number,
  price: Number,
  discountPercent: Number,
  sizes: [{ name: String, quantity: Number }],
  quantity: Number,
  topLevelCategory: String,
  secondLevelCategory: String,
  thirdLevelCategory: String,
  description: String,
});

const ProductModel = mongoose.model("Product", productSchema);

module.exports = ProductModel;
