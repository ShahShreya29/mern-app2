const express = require("express");
// const upload = require("../Config/Multer.js");
const ProductController = require("../Controller/Product.Controller.js");
const auth = require("../Config/Auth.js").auth;
const router = express.Router();


router.post("/addProducts",auth, ProductController.AddMultipleProducts);
router.post("/",auth, ProductController.CreateProduct);
router.delete("/:id", auth, ProductController.DeleteProduct);
router.put("/:id", auth, ProductController.UpdateProduct);
router.get("/", auth, ProductController.GetAllProduct);
router.get("/:id", auth, ProductController.GetProduct);

module.exports = router;
