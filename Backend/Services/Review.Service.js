const Review = require("../Model/Review.Model");
const productService = require("../Services/Product.Service")

const CreateReview = async(data,user)=>{
    const product = await productService.findProductById(data.productId);
    const review = new Review({
        user:user._id,
        product:product._id,
        review:data.review,
        createAt:new Date(),
    })

    await product.save();
    return await review.save();
}

const GetAllReview = async(productId) =>{
    const product = await productService.findProductById(data,productId);
    return await Review.find({product: productId}).populate("user");
}

module.exports = {CreateReview , GetAllReview}