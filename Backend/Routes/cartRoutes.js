const express = require("express");
// const upload = require("../Config/Multer.js");
const CartController = require("../Controller/Cart.Controller.js");
const CartItemController = require("../Controller/CartItem.Controller.js");
const auth = require("../Config/Auth.js").auth;
const router = express.Router();

router.get("/", auth, CartController.FindUserCart);
router.put("/add", auth, CartController.AddItemCart);
router.put("/:id", auth, CartItemController.UpdateCartItem);
router.delete("/:id", auth, CartItemController.RemoveCartItem);

module.exports = router;
