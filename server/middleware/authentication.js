const { verifyToken } = require("../helper/bcrypt_jwt")
const { User } = require("../models")

async function authentication(req, res, next) {
    try {
        let access_token = req.headers.access_token
        if (!access_token) throw { name: "UNAUTHORIZED" }

        let payload = verifyToken(access_token)
        let user = await User.findByPk(payload.id)
        if (!user) throw { name: "UNAUTHORIZED" }

        req.user = {
            id: user.id,
            username: user.username
        }

        next()
    } catch (error) {
        next(error)
    }
}

module.exports = authentication