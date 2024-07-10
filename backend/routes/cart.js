const express = require('express');
const router = express.Router();
const CartItem = require('../models/CartItem');
const Item = require('../models/Item');

// Add item to cart
router.post('/add', async (req, res) => {
  const { itemId, quantity } = req.body;


  try {
    
    const cartItem = new CartItem({ itemId, quantity });
    await cartItem.save();
    res.status(201).json(cartItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all cart items
router.get('/', async (req, res) => {
  try {
    const cartItems = await CartItem.find().populate('itemId');
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/*
try {
  let cartItem = await cartItem.findOne({ itemId, quantity });
  if (!cartItem) {
    cart = new Cart({ itemId, quantity: [] });
  }

  const itemIndex = cartItem.items.findIndex(item => item.itemId.toString() === itemId);
  if (itemIndex > -1) {
    cart.items[itemIndex].quantity += 1;
  } else {
    cartItem.items.push({ itemId, quantity: 1 });
  }

  await cartItem.save();
  res.status(200).send(cart);
} catch (error) {
  res.status(500).send({ message: 'Error adding item to cart', error });
}
});
*/
// Calculate total price
router.get('/total', async (req, res) => {
  try {
    const cartItems = await CartItem.find().populate('itemId');
    const totalPrice = cartItems.reduce((acc, cartItem) => {
      return acc + (cartItem.itemId.price * cartItem.quantity);
    }, 0);
    res.json({ totalPrice });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
