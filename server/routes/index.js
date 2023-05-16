const express = require("express")
const router = express.Router()
const Controller = require("../controller/home")

// user handle
const register = require("./register")
const login = require("./login")

router.get("/", Controller.home)
router.use("/register", register)
router.use("/login", login)

module.exports = router