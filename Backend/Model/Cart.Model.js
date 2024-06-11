const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    cartItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "cartItems",
        required: true
    }],
    totalPrice: {
        type: Number,
        required: true,
        default:0
    },
    totalItem: {
        type: Number,
        required: true,
        default:0
    },
    totalDiscount: {
        type: Number,
        required: true,
        default:0
    },
    discount: {
        type: Number,
        required: true,
        default:0
    },
})

const cart = mongoose.model("cart",cartSchema)
module.exports=cart;   