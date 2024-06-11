const userService = require("./User.Service");
const CartItem = require("../Model/CartItem.Model")

const UpdateCartItem = async (userId, cartItemId,cartItemData) => {
  try {
    const item = await GetCartItem(cartItemId);
    if (!item) {
      throw new Error("item not Found");
    }
    const user = await userService.getUserById(item.userId);
    if (!user) {
      throw new Error("user not Found");
    }
    if (user._id.toString() === userId.toString()) {
      item.qty = cartItemData.qty;
      item.price = item.qty * item.product.price;
      item.discountPrice = item.qty * item.product.discountPrice;
      const updatedCartItem = await item.save();
      return updatedCartItem;
    } else {
      throw new Error("can not update");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

const removeCartItem = async (userId, cartItemId) => {
  try {
    const cartItem = await CartItem.findById(cartItemId);
    const user = await userService.getUserById(userId);

    if (user._id.toString() === cartItem.userId.toString()) {
      return await CartItem.findByIdAndDelete({ cartItemId });
    } else {
      throw new Error("can not delete");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

const GetCartItem = async (cartItemId) => {
  try {
    const cartItem = await CartItem.findById(cartItemId).populate("products");
    if (cartItem) {
      return cartItem;
    } else {
      throw new Error(" not found");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { UpdateCartItem, removeCartItem, GetCartItem };
