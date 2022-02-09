const mongoose = require('mongoose');
// const config = require('../node_modules/config');
require('dotenv').config();
const mongoDBUrl = process.env.MONGO_URI;

const connectDB = () => {
  mongoose
    .connect(mongoDBUrl, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // useCreateIndex: true,
      // useFindAndModify: true,
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err.message));
};

module.exports = connectDB;
