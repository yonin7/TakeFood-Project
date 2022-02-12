const express = require('express');
const router = express.Router();
const Orders = require('../models/orders');
const auth = require('../middleware/auth');
const User = require('../models/register');

router.get('/', auth, async (req, res) => {
  console.log(req.user.id);
  let user = await User.findById(req.user.id);
  if (user.role === 'admin') {
    let orders = await Orders.find();
    if (!orders) res.status(200).json('No Orders Placed!');
    else {
      res.status(200).json(orders);
    }
  } else {
    let user_id = req.user.id;
    let orders = await Orders.find({
      user: user_id,
    });
    if (!orders) res.status(200).json('No Orders Placed!');
    else {
      res.status(200).json(orders);
    }
  }
});

module.exports = router;
