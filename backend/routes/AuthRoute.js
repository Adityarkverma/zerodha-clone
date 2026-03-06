const { Signup, Login } = require('../controllers/AuthController')
const router = require('express').Router()
const {userVerification} = require("../middlewares/AuthMiddleware")
const User = require("../model/UserModel")

router.post('/signup', Signup)
router.post('/login', Login)
router.post("/verify", userVerification, async(req, res) => {
  const user = await User.findById(req.user.id).select("username");
  res.json({ status: true,username: user.username });
});

module.exports = router