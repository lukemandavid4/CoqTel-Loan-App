const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const connectDB = async () => {
  await mongoose
    .connect(process.env.DB_CONNECT)
    .then(() => {
      console.log(`Connected to Database`);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDB;
