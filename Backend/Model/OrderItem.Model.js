const mongoose = require("mongoose")

const orderItemSchema = new mongoose.Schema({
    
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
        required: true
    },
    size: {
        type: String,
        required: true,
    },
    qty: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    discountPrice: {
        type: Number,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    orderItem: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "orderItem",
    },

})

const orderItem = mongoose.model("orderItem", orderItemSchema)
module.exports = orderItem;   