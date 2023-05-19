const express = require('express')
const { registerUser } = require('../controllers/userControllers')
const { authuser } = require('../controllers/userControllers')
const { allusers } = require('../controllers/userControllers')
const { protect } = require("../middlewares/authMiddleware")

const router = express.Router()

router.route('/').post(registerUser).get(protect, allusers);
router.post('/login', authuser)

module.exports = router