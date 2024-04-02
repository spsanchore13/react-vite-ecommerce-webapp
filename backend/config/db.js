const mongoose = require("mongoose");

const connectToMongoDB = mongoose.connect(
  "mongodb+srv://shanti:shanti@cluster0.wyuz0gk.mongodb.net/shop-co?retryWrites=true&w=majority&appName=Cluster0"
);
module.exports = connectToMongoDB;
