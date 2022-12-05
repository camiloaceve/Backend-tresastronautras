const { Router } = require("express")

const {
	addUser,
	listUsers,
	login,
} = require("../controller/UserController")

const auth = require("../middlewares/auth")

const router = Router()

router.post("/register", addUser)
router.get("/listUser", auth.verifyUser, listUsers)
router.post("/login", login)

module.exports = router
