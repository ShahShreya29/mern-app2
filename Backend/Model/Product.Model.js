const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    price: {
        type: String
    },
    qty: {
        type: Number,
        required: true
    },
    brand: {
        type: String
    },
    color: {
        type: String
    },
    size: [{
        name: { type: String },
        qty: { type: Number },
    }],
    image: {
        type: String
    },
    ratings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "ratings",
    }],
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "reviews",
    }],
    numRate: {
        type: Number,
        default: 0
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categories",
    },
    createAt: {
        type: Date,
        default: Date.now,
    }
})

const Product = mongoose.model("products", productSchema)
module.exports = Product;   