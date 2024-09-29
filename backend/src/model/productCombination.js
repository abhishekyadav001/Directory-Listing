const mongoose = require("mongoose");

const productCombinationSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  materialId: { type: mongoose.Schema.Types.ObjectId, ref: "Material" },
  gradeIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Grade" }],
  price: Number,
  currency: String,
  shape: String,
  length: String,
  thickness: String,
});

module.exports = mongoose.model("ProductCombination", productCombinationSchema);
