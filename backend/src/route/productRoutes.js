const express = require("express");
const product = require("../model/product");
const material = require("../model/material");
const grade = require("../model/grade");
const productCombination = require("../model/productCombination");
const router = express.Router();
// const Product = require('../models/product');
// const Material = require('../models/material');
// const Grade = require('../models/grade');
// const ProductCombination = require('../models/productCombination');

// Get products, materials, and grades
router.get("/list", async (req, res) => {
  try {
    const products = await product.find();
    const materials = await material.find();
    const grades = await grade.find();
    res.json({ products, materials, grades });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Add new product combination
router.post("/add-product", async (req, res) => {
  const { productId, materialId, gradeIds, price, currency, shape, length, thickness } = req.body;

  const productCombination = new productCombination({
    productId,
    materialId,
    gradeIds,
    price,
    currency,
    shape,
    length,
    thickness,
  });

  try {
    await productCombination.save();
    res.status(201).json(productCombination);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Update product combination
router.put("/update-product/:id", async (req, res) => {
  try {
    const updatedProduct = await productCombination.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
