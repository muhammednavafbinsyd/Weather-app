const mongoose = require("mongoose");

function connectDB() {
  mongoose.connect('mongodb://0.0.0.0:27017/weatherapp')
  .then(() => {
    console.log("Database connected");
    console.log("http://localhost:27017");
  })
  .catch((err) => {
    console.log("Database error: " + err);
  });
}

module.exports = connectDB;


