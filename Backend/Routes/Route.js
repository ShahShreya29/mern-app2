const express = require("express");
// const upload = require("../Config/Multer.js");
const auth = require("../Config/Auth.js").auth;
// const userController = require("../Controller/User.Controller.js");
const AdminOrderController = require("../Controller/AdminOrder.Controller.js");
// const CartController = require("../Controller/Cart.Controller.js");
// const CartItemController = require("../Controller/CartItem.Controller.js");
const OrderController = require("../Controller/Order.controller.js");
// const ProductController = require("../Controller/Product.Controller.js");
const ReviewController = require("../Controller/Review.Controller.js");
const RatingController = require("../Controller/Rating.Controller.js");

const router = express.Router();

// router.post("/signUp", userController.signUp);
// router.post("/signIn", userController.signIn);
// router.get("/profile", userController.getUserProfile);
// router.get("/", userController.getUsers);
// router.post("/refreshToken", userController.refreshToken);

router.put("/:orderId/confirmed", auth, AdminOrderController.ConfirmOrder);
router.get("/", auth, AdminOrderController.GetAllOrders);
router.put("/:orderId/ship", auth, AdminOrderController.ShipOrder);
router.put("/:orderId/deliver", auth, AdminOrderController.DeliverOrder);
router.put("/:orderId/canceled", auth, AdminOrderController.CancelOrder);
router.put("/:orderId/delete", auth, AdminOrderController.DeleteOrder);

// router.get("/", auth, CartController.FindUserCart);
// router.patch("/add", auth, CartController.AddItemCart);
// router.patch("/:id", auth, CartItemController.UpdateCartItem);
// router.delete("/:id", auth, CartItemController.RemoveCartItem);

router.post("/", auth, OrderController.CreateOrders);
router.get("/user", auth, OrderController.UserOrders);
router.get("/:id", auth, OrderController.GetOrder);

// router.post("/addProducts",auth, ProductController.AddMultipleProducts);
// router.post("/",auth, ProductController.CreateProduct);
// router.delete("/:id", auth, ProductController.DeleteProduct);
// router.put("/:id", auth, ProductController.UpdateProduct);
// router.get("/", auth, ProductController.GetAllProduct);
// router.get("/:id", auth, ProductController.GetProduct);

router.post("/addReview", auth, ReviewController.CreateReview);
router.get("/product/:productId", auth, ReviewController.GetAllReview);

router.post("/addRating", auth, RatingController.CreateRating);
router.get("/product/:productId", auth, RatingController.GetAllRating);
 
module.exports = router;
 