const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ status: false });
  }

  try {
    const data = jwt.verify(token, process.env.TOKEN_KEY);
    req.user = data;
    next();
  } catch (err) {
    return res.status(401).json({ status: false });
  }
};