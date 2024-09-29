const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const router = require("./route/productRoutes");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/products", router);
mongoose
  .connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server running on port ${port}`));
