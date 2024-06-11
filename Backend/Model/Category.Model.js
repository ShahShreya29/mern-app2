const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },

    parentCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categories",
    },

    level: {
        type: String,
        required: true,
    },
})

const Category = mongoose.model("Categories", categorySchema)
module.exports = Category;


// cloths
    // dress
    // saree
     // tops
    // jeans

// makeup
    //lipstick
    //foundation
     //..
    //...
    //..

//Accessories
    //goggles
    //purse
    //bag
    //watch
    //cap
    //belt
    //stoles
    //jewelry

//footWare
    //Sports Shoes
    //Sneakers
    //Casual Shoes
    //Flipflops & Sliders
    //Formal Shoes
    //Sandals
    //Boots

//Home

    //Decor
    //Kitchen & Dining
    //Bedding
    //Bath
    //Storage
    //Home Essentials
    //Appliances


