const ReviewService = require("../Services/Review.Service");


const CreateReview = async (req, res) => {
    const user = req.user;
    try {
      const createReview = await ReviewService.CreateReview(user,req.body);
      return res.status(200).send(createReview);
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  };
  
  const GetAllReview = async (req, res) => {
    const productId = req.params.productId;
    try {
      const GetAllReview = await ReviewService.GetAllReview(productId,req.body);
      return res.status(200).send(GetAllReview);
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  };
  
  module.exports={
    CreateReview,
    GetAllReview
  }