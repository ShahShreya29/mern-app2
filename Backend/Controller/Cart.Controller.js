const CartService = require("../Services/Cart.Service.js");

const FindUserCart = async (req, res) => {
  const user = req.user;
  try {
    const cart = await CartService.FindUserCart({ user });
    return res.status(200).send(cart);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const AddItemCart = async (req, res) => {
  console.log("here");
   const userId = req.params.id;
  console.log("userId", userId);
  const request = req.body;
  try {
    console.log("here");
    const cartItems = await CartService.AddCartItem({ userId, request });
    return res.status(200).send(cartItems);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = { FindUserCart, AddItemCart };
