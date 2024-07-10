const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/transfer', async (req, res) => {
  const { amount, accountNumber, bankCode } = req.body;

  try {
    const response = await axios.post('https://mock-bank-api.com/transfer', {
      amount,
      accountNumber,
      bankCode
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
