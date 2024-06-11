
const jwt = require("jsonwebtoken");
require('dotenv').config();


module.exports = {
  auth: (req, res, next) => {
    const bearerHeader = req.headers["authorization"];

    if (bearerHeader !== "undefined") {
      const token = bearerHeader?.split(" ")[1];
      req.token = token;
      jwt.verify(req.token,process.env.JWT_KEY , (err, payload) => {
        if (err) {
          const refreshToken = req.headers["refresh-token"];
          if (!refreshToken) {
            return res.status(419).json({
              error: "Access token expired or invalid, no refresh token provided.",
            });
           }
          jwt.verify(refreshToken, process.env.JWT_KEY , (err, resolve) => {
            if (err) {
            
              return res.status(419).json({ error: "Refresh token expired or invalid." });
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
      return res.status(419).json({ error: "Access token not provided." });
    }
  },
};