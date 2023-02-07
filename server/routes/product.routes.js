const express = require("express");
const router = express.Router({ mergeParams: true });
const Product = require("../models/Product");

router.get("/", async (req, res) => {
  try {
    const list = await Product.find();
    res.status(200).send(list);
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

router.patch("/:productId", async (req, res) => {
  try {
    const { productId } = req.params;
    if (productId) {
      const updateProduct = await Product.findByIdAndUpdate(
        productId,
        req.body,
        { new: true }
      );
      res.send(updateProduct);
    } else {
      res.status(401).json({ message: "Product dont update" });
    }
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(200).send(newProduct);
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

router.delete("/:productId", async (req, res) => {
  try {
    const { productId } = req.params;
    const removeProduct = await Product.findById(productId);
    // const removeComment = await  Comment.find({_id:commentId}) одно и тоже что выше. Для демонстрации
    if (removeProduct) {
      await removeProduct.remove();
      return res.send(null);
    } else {
      res.status(401).json({ message: "Product dont remove from base" });
    }
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});
module.exports = router;
