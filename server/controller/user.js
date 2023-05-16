const { User } = require("../models")
const { comparePassword, createToken, verifyToken } = require("../helper/bcrypt_jwt")

class Controller {
    static async registerUser(req, res, next) {
        try {
            let { username, email, password } = req.body

            let createdUser = await User.create({
                username,
                email,
                password
            })

            res.status(201).json({
                id: createdUser.id,
                username: createdUser.username
            })
            next()
        } catch (error) {
            next(error)
        }
    }

    static async loginUser(req, res, next) {
        try {
            let { email, password } = req.body
            if (!email || !password) throw { name: "BAD_REQUEST" }

            let foundUser = await User.findOne({
                email
            })
            if (!foundUser) throw { name: "UNAUTHORIZED" }

            const comparedPassword = comparePassword(password, foundUser.password)
            if (!foundUser) throw { name: "UNAUTHORIZED" }

            const payload = {
                id: foundUser.id,
                username: foundUser.username
            }
            const access_token = createToken(payload)

            res.status(200).json({
                access_token, username: foundUser.username
            })

        } catch (error) {
            next(error)
        }
    }
}

module.exports = Controller