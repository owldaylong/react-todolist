const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const SECRET = "kamunanyeaaak?"

// bcryptjs
const hashPassword = (password) => bcrypt.hashSync(password)
const comparePassword = (password, hashedPassword) => bcrypt.compareSync(password, hashedPassword)

// jsonwebtoken

const createToken = (payload) => jwt.sign(payload, SECRET)
const verifyToken = (token) => jwt.verify(token, SECRET)

module.exports = {
    hashPassword,
    comparePassword,
    createToken,
    verifyToken
}