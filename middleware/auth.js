const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET || require("../config/keys").jwtSecret;

function auth(req, res, next) {
  const token = req.header("x-auth-token");

  // Check for token
  if (!token) return res.status(401).json({ msg: "Authorization denied" });

  try {
    // Verify token
    const decoded = jwt.verify(token, jwtSecret);
    // Add user from payload
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ msg: "Token not valid" });
  }
}

module.exports = auth;
