const express = require("express")
const router = express.Router()
const Controller = require("../controller/user")

router.post("/", Controller.registerUser)

module.exports = router