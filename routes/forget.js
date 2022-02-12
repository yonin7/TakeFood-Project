const express = require('express');
const router = express.Router();
const Forget = require('../models/forget');
const User = require('../models/register');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const shortid = require('shortid');
const mail = require('../controllers/mail');

router.post('/', async (req, res) => {
  let { email } = req.body;
  User.findOne({ email }, async (err, user) => {
    if (err) {
      console.log(err);
      res.status(400).json(err);
    } else if (!user) {
      console.log(err);
      res.status(400).json('User not registered!');
    } else {
      let code = shortid.generate();
      let link = `https://takebis.herokuapp.com/forget/${code}`;
      Forget.findOneAndDelete({ email }, (err) => {
        if (err) console.log(err);
      });
      forget = new Forget({
        email,
        code,
      });
      await forget.save();
      let name = user.name;

      try {
        let sendMail = mail.resetPassword(email, name, link);
        res.status(200).json('Reset Email Sent to your mail id');
      } catch (err) {
        console.log(err);
        res.status(400).json(err);
      }
    }
  });
});

module.exports = router;
