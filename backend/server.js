require("dotenv").config();

const express = require("express");
const connectToMongoDB = require("./config/db");
const authRouter = require("./routes/authRoute");
const productRouter = require("./routes/productRoute");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello From Backend Server");
});

app.use("/api", authRouter);
app.use("/api", productRouter);
app.use("/api", authRouter);

app.listen(PORT, async () => {
  try {
    await connectToMongoDB;
    console.log("Connected to MongoDB");
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
