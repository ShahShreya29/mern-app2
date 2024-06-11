const Rating = require("../Model/Rating.Model");
const productService = require("../Services/Product.Service");

const CreateRating = async (data, user) => {
  const product = await productService.findProductById(data.productId);
  const rating = new Rating({
    user: user._id,
    product: product._id,
    rating: data.rating,
    createAt: new Date(),
  });

  return await rating.save();
};

const GetAllRating = async (productId) => {
  return await Rating.find({ product: productId });
};

module.exports = { CreateRating, GetAllRating };
                       