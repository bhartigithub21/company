const jwt = require("jsonwebtoken");
const Blacklist = require("../models/Blacklist");

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      // Check if token is blacklisted
      const isBlacklisted = await Blacklist.findOne({ token });
      if (isBlacklisted) {
        return res
          .status(401)
          .json({ message: "Not authorized, token blacklisted" });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.adminId = decoded.id;
      req.token = token; // Make token available for logout
      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  }

  if (!token) {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};

module.exports = { protect };
