const tokenService = require("../services/token")

async function verifyUser(req, res, next) {
	if (!req.headers.token) {
		return res.status(404).send({
			message: "No token",
		})
	}
	const response = await tokenService.decode(req.headers.token)
	if (response.rol === "user") {
		next()
	} else {
		return res.status(403).send({
			message: "No autorizado",
		})
	}
}

module.exports = {
	verifyUser,
}
