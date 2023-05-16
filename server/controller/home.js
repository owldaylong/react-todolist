class Controller {
    static home(req, res) {
        try {
            res.send("Welcome to the server!")
        } catch (error) {
            next(error)
        }
    }
}

module.exports = Controller