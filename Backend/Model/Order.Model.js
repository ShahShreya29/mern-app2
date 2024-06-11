const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  orderItem: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "orderItem",
    },
  ],
  orderDate: {
    type: Date,
    required: true,
  },
  deliveryDate: {
    type: Date,
    required: true,
  },
  shippingAddress: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "address",
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  totalDiscount: {
    type: Number,
    required: true,
  },
  totalItem: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  orderStatus: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Order = mongoose.model("order", orderSchema);
module.exports = Order;
