const jwt = require("jsonwebtoken");
require('dotenv').config();
const { sendError } = require("../errorHandler");

module.exports = {
  verificationToken: (req, res, next) => {
    const bearerHeader = req.headers["authorization"];

    if (bearerHeader !== "undefined") {
      const token = bearerHeader?.split(" ")[1];
      req.token = token;
      jwt.verify(req.token,process.env.JWT_KEY , (err, payload) => {
        if (err) {
          const refreshToken = req.headers["refresh-token"];
          if (!refreshToken) {
            // return res.status(419).json({
            //   error: "Access token expired or invalid, no refresh token provided.",
            // });
            return sendError(res, "Token expired or invalid");
          }
          jwt.verify(refreshToken, process.env.JWT_KEY , (err, resolve) => {
            if (err) {
              return sendError(res, "Token expired or invalid");
              // return res.status(419).json({ error: "Refresh token expired or invalid." });
            }
            const { accessToken, refreshToken: newRefreshToken } =
              module.exports.AccessToken(resolve.id);
            res.setHeader("Authorization", `Bearer ${accessToken}`);
            res.setHeader("Refresh-Token", newRefreshToken);
            req.token = accessToken;
            next();
          });
        } else {
          req.payload = payload;
          next();
        }
      });
    } else {
      return sendError(res, "Token expired or invalid");
      // return res.status(419).json({ error: "Access token not provided." });
    }
  },
};


// // authMiddleware.js
// const jwt = require('jsonwebtoken');
// const { refreshToken } = require('../Services/User.Service');

// exports.verifyToken = (req, res, next) => {
//   const token = req.headers.authorization;
//   if (!token) return res.status(401).json({ message: 'Unauthorized' });

//   jwt.verify(token, process.env.JWT_KEY, (err, user) => {
//     if (err) return res.status(403).json({ message: 'Invalid token' });
//     req.user = user;
//     next();
//   });
// };

// exports.refreshTokenMiddleware = async (req, res, next) => {
//   const token = req.headers.authorization;
//   if (!token) return res.status(401).json({ message: 'Unauthorized' });

//   try {
//     const newToken = await refreshToken(token);
//     req.newToken = newToken;
//     next();
//   } catch (error) {
//     res.status(403).json({ message: 'Failed to refresh token' });
//   }
// };
