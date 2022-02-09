const express = require('express');
const upload = require('../controllers/upload');
const Router = express.Router();
const Product = require('../models/product');
const User = require('../models/register');
// const Cloudinary = require('cloudinary');
const auth = require('../middleware/auth');
// const config = require("config");
require('dotenv').config();
const jwtSecret = process.env.JWT_SECRET;

// Cloudinary.config({
//   cloud_name: "devforlife07",
//   api_key: config.get("api_key"),
//   api_secret: config.get("api_secret"),
// });

Router.post('/upload', [auth, upload], async (req, res) => {
  console.log('1');

  try {
    let user = await User.findOne({ _id: req.user.id });
    console.log('2');
    if (user.role !== 'admin')
      return res
        .status(401)
        .json(
          'Your request was processed but only admins are allowed to add or remove items!'
        );
    console.log('3');
    let product = await Product.findOne({
      name: req.body.name,
    });
    if (product) return res.status(400).json('Product already exists!');
    console.log(req);
    product = new Product({
      type: req.body.type,
      name: req.body.name,
      price: req.body.price,
      url: `/images/${req.file.originalname}`,
    });
    await product.save();
    console.log('5');
    return res.status(200).json('Item Saved Successfully!');
  } catch (e) {
    console.log(e);
    res.status(500).send('Server Error');
  }
  // console.log(req.body);

  // async function (error, result) {
  // }
  // Cloudinary.v2.uploader.upload(
  //   req.file.path,
  // );
});

Router.get('/items', async (req, res) => {
  Product.find({}, (err, items) => {
    if (err) res.status(400).json(err);
    res.status(200).json(items);
  });
});

Router.post('/items', auth, async (req, res) => {
  try {
    let user = await User.findOne({ _id: req.user.id });
    if (user.role !== 'admin')
      return res
        .status(401)
        .json(
          'Your request was processed but only admins are allowed to add or remove items!'
        );
    const item = await Product.deleteOne({
      name: req.body.name,
    });
    res.status(200).send(item);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});
module.exports = Router;
