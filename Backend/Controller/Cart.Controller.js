const CartService = require("../Services/Cart.Service.js");

const FindUserCart = async (req, res) => {
  const user = req.user;
  try {
    const cart = await CartService.FindUserCart(user._id);
    return res.status(200).send(cart);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const AddItemCart = async (req, res) => {
  const user = req.user;
  try {
    const cartItems = await CartService.AddCartItem(user._id, req.body);
    return res.status(200).send(cartItems);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = { FindUserCart, AddItemCart };
