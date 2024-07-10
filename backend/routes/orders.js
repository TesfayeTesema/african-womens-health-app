const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const Cart = require('../models/CartItem');

// Place an order
router.post('/', async (req, res) => {
  const { items, totalPrice, paymentIntentId } = req.body;

  const order = new Order({
    items,
    totalPrice,
    paymentIntentId
  });

  try {
    const newOrder = await order.save();

    // Clear cart
    await Cart.deleteMany();

    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
