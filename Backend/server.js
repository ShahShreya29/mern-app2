const connect = require("./Connection/db");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const userRouter = require("./Routes/userRoutes.js");
const productRouter = require("./Routes/productRoutes.js");
const cartRouter = require("./Routes/Route.js");
const orderRouter = require("./Routes/Route.js");
const adminOrderRouter = require("./Routes/Route.js");
const cartItemRouter = require("./Routes/Route.js");
const ratingRouter = require("./Routes/Route.js");
const reviewRating = require("./Routes/Route.js");

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/orders", orderRouter);
app.use("/api/cartItem", cartItemRouter);
app.use("/api/rating", ratingRouter);
app.use("/api/review", reviewRating);
app.use("/api/adminOrder", adminOrderRouter);

const PORT = process.env.PORT || 5051;

app.listen(PORT, async () => {
  try {
    console.log(
      `Server is running on PORT ${PORT}, database connected successfully`
    );
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }
});
