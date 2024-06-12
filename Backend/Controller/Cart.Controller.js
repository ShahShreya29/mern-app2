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
  const user = req.userId;
  console.log("user", user);
  const request = req.body;
  try {
    ("const this is the Add cart Item");
    console.log("here");
    const cartItems = await CartService.AddCartItem({ user, request });
    return res.status(200).send(cartItems);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = { FindUserCart, AddItemCart };
