const CartItemService = require("../Services/CartIem.Service.js");

const UpdateCartItem = async (req, res) => {
  const user = req.user;
  try {
    const updatedCartItem = await CartItemService.UpdateCartItem(
      user._id,
      req.params.id,
      req.body
    );
    return res.status(200).send(updatedCartItem);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const RemoveCartItem = async (req, res) => {
  const user = await req.user;
  try {
    await CartItemService.removeCartItem(user._id, req.params.id);
    return res.status(200).send({ message: "Cart Item Removed" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = { UpdateCartItem, RemoveCartItem };
