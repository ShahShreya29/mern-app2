const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    required: true,
    default: "customer",
  },
  mobile_no: {
    type: String,
  },
  address: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "address",
    },
  ],
  ratings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ratings",
    },
  ],
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "reviews",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.model("user", userSchema);
module.exports = User;
