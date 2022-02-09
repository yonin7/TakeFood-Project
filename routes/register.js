const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Register = require('../models/register');
const bcrypt = require('bcryptjs');
var CronJob = require('cron').CronJob;
const { check, validationResult } = require('express-validator');
// const config = require('../node_modules/config');
require('dotenv').config();
const jwtSecret = process.env.JWT_SECRET;

const mail = require('../controllers/mail');
const auth = require('../middleware/auth');
const shortid = require('shortid');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

router.post(
  '/',
  [
    check('name', 'Your name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('number', 'Please include a valid phone number').isMobilePhone(),
    check(
      'password',
      'Password should be combination of one uppercase , one lower case, one special char, one digit and min 8 , max 20 char long'
    ).matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, 'i'),
    check('confirmPassword', 'Passwords do not match!').custom(
      (value, { req, loc, path }) => {
        if (value !== req.body.password) {
          // trow error if passwords do not match
          throw new Error("Passwords don't match");
        } else {
          return value;
        }
      }
    ),
  ],
  async (req, res) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res.status(400).json({
        errors: err.array(),
      });
    }
    console.log(1);
    const { name, email, number, password, confirmPassword } = req.body;
    try {
      let user = await Register.findOne({
        email: email,
      });
      if (user)
        return res.status(400).json({
          msg: 'User already exists',
        });
      console.log(2);
      var uid = '';
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      var charactersLength = characters.length;
      for (var i = 0; i < 6; i++) {
        uid += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      console.log(3);
      user = new Register({
        name,
        email,
        number,
        password,
        confirmPassword,
        uid: uid,
        verfied: false,
      });
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();
      console.log(user);
      try {
        let sendMail = mail.sendWelcomeEmail(email, name, uid);
        res.status(200).json({ user_id: user._id, name: name });
      } catch (err) {
        console.log(err);
        res.status(400).json(err);
      }
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }
);

module.exports = router;
