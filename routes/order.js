const express = require('express');
const router = express.Router();
const cors = require('cors');
const User = require('../models/register');
const auth = require('../middleware/auth');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const Order = require('../models/orders');
const mail = require('../controllers/mail');

// router.post('/', async (req, res) => {
// 	const {
// 		id,
// 		order
// 	} = req.body;
// 	let order1 = {};
// 	(order1.total_price = cart.total_price),
// 	(order1.total_quantity = order.total_quantity),
// 	(order1.items = []);
// 	order.items.forEach((item) => {
// 		order1.items.push(item);
// 	});
// 	try {
// 		User.findOneAndUpdate(id, {
// 			$push: {
// 				orders: order1
// 			}
// 		})
// 		res.status(200).json({
// 			msg: "Order Placed Successfully!"
// 		})
// 	} catch (err) {
// 		res.status(400).json(err);
// 	}

// })
router.post('/', cors(), auth, async (req, res) => {
  let user = await User.findById(req.user.id);
  let email = user.email;
  let name = user.name;
  let method = req.body.mode;
  let orderId = crypto.randomBytes(16).toString('hex');
  if (method === 'Takeaway') {
    let order = new Order({
      user: req.user.id,
      order_id: orderId,
      mode: req.body.mode,
      order: req.body.order,
      deliveryCharges: req.body.deliveryCharges,
      payment: req.body.payment,
    });
    console.log(order);
    try {
      await order.save();

      try {
        let sendMail = mail.sendOrderEmail(email, name, order);
      } catch (err) {
        console.log(err);
        res.status(400).json(err);
      }

      let update = {
        cart: {},
      };
      await User.findOneAndUpdate(
        {
          _id: req.user.id,
        },
        update
      );
      res.status(200).send({
        orderid: orderId,
      });
      // res.redirect("/success?orderid=" + order_id)
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  } else {
    let order = new Order({
      user: req.user.id,
      email: email,
      order_id: orderId,
      mode: req.body.mode,
      order: req.body.order,
      deliveryCharges: req.body.deliveryCharges,
      payment: req.body.payment,
      address: req.body.address,
    });
    console.log(order);
    try {
      await order.save();
      try {
        let sendMail = mail.sendOrderEmail(email, name, order);
      } catch (err) {
        console.log(err);
        res.status(400).json(err);
      }

      let update = {
        cart: {},
      };
      await User.findOneAndUpdate(
        {
          _id: req.user.id,
        },
        update
      );
      res.status(200).send({
        orderid: orderId,
      });
      // res.redirect("/success?orderid=" + order_id)
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  }
  // order = new Order({
  // 	user: req.user.id,
  // 	order_id: order_id,
  // 	mode: req.body.value,
  // 	order: req.body.cart,
  // 	deliveryCharges: req.body.deliveryCharges,
  // 	payment: req.body.payment,
  // });
  // res.sendStatus(200)
});
router.get('/', async (req, res) => {
  let orderId = req.query.orderid;
  try {
    let current = await Order.findOne({
      order_id: orderId,
    }).populate('user');
    // console.log(current)
    res.send(current);
  } catch (e) {
    res.sendStatus(404);
  }
});
router.put('/:order_id', async (req, res) => {
  let orderId = req.params.order_id;
  console.log(orderId);
  try {
    let current = await Order.findOneAndUpdate(
      {
        order_id: orderId,
      },
      { status: req.body.status }
    );
    console.log(current, req.body.status);
    res.send(current);
  } catch (e) {
    console.log(e);
    res.sendStatus(404);
  }
});

module.exports = router;
