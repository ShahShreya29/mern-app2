const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  PermanentAddress: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zipCode: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const Address = mongoose.model("address", addressSchema);
module.exports = Address;
