const UserService = require("../Services/User.Service.js");
const CartService = require("../Services/Cart.Service.js")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require('dotenv').config();

const UserController = {
  signUp: async (req, res) => {
    try {
      const { name, email, password, role } = req.body;
      const user = await UserService.signUp({ name, email, password, role });

      await CartService.CreateCart(user);
      if (user.error) {
        return res.status(400).json({ error: "Bad request" });
      }
      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  },

  signIn: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await UserService.getUserByEmail(email);
  
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
  
      const isPasswordMatch = await bcrypt.compare(password, user.password);
  
      if (!isPasswordMatch) {
        return res.status(401).json({ error: "Invalid email or password" });
      }
  
      const payload = { id: user._id };
      const accessToken = jwt.sign(payload, process.env.JWT_KEY, {
        expiresIn: "1h", // Change expiresIn to a longer duration
      });
      const refreshToken = jwt.sign(payload, process.env.JWT_KEY, {
        expiresIn: "10h",
      });
  
      // // Save refresh token to database
      // const newRefreshToken = new RefreshToken({ token: refreshToken });
      // await newRefreshToken.save();
  
      return res.status(200).json({ user, accessToken, refreshToken });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  },
  

  getUserProfile: async (req, res) => {
    try {
      const accessToken = req.headers.authorization?.split(" ")[1];

      if (!accessToken) {
        return res.status(404).send({ error: "Token not founf" })
      }
      const user = await UserService.getUserByToken(accessToken)
      res.status(200).json({ user });
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  },

  
  getUsers: async (req, res) => {
    try {
      const user = await UserService.getUsers();
      res.status(200).json({ user });
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  },



  refreshToken: async (req, res) => {
    const refreshToken = req.headers["refresh-token"];

    try {
      const decoded = jwt.verify(refreshToken, process.env.JWT_KEY);
      const newAccessToken = jwt.sign({ id: decoded.id }, process.env.JWT_KEY, {
        expiresIn: "15s",
      });

      return res.status(200).json({
        message: "Access token refreshed successfully",
        accessToken: newAccessToken,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  },
};



module.exports = UserController;