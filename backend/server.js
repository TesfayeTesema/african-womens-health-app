const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const shopRoutes = require('./routes/shop');
const cartRoutes = require('./routes/cart');
const bankRoutes = require('./routes/bank');
const ordersRoutes = require('./routes/orders');
const stripe = require('stripe')('your_stripe_secret_key');


const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/africanWomensHealth', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

const registrationSchema = new mongoose.Schema({
  name: String,
  email: String,
  webinarTitle: String,
  registrationDate: { type: Date, default: Date.now }
});

const Registration = mongoose.model('Registration', registrationSchema);

app.post('/pages/registrations', async (req, res) => {
  try {
    const newRegistration = new Registration(req.body);
    await newRegistration.save();
    res.status(201).send(newRegistration);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.use('/api/shop', shopRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/bank', bankRoutes);
app.use('/api/orders', ordersRoutes);

app.post('/api/checkout', async (req, res) => {
  const { items } = req.body;
  
  // Calculate the total price based on cart items
  const cartItems = await CartItem.find({ _id: { $in: items } }).populate('itemId');
  const totalAmount = cartItems.reduce((acc, cartItem) => {
    return acc + (cartItem.itemId.price * cartItem.quantity);
  }, 0);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalAmount * 100, // Stripe works with cents
      currency: 'usd',
    });
    
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
