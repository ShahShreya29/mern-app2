const RatingService = require("../Services/Rating.Service.js");


const CreateRating = async (req, res) => {
    const user = req.user;
    try {
      const createRating = await RatingService.CreateRating(user,req.body);
      return res.status(200).send(createRating);
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  };
  
  const GetAllRating = async (req, res) => {
    const productId = req.params.productId;
    try {
      const getAllRating = await RatingService.GetAllRating(productId);
      return res.status(200).send(getAllRating);
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  };
  
  module.exports={
    CreateRating,
    GetAllRating
  }