const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: true,
  },
  userPassword: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  userAge: {
    type: Number,
    required: true
  }
});

const user = mongoose.model("User", UserSchema);

module.exports = user;
