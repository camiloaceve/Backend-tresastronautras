const models = require("../models")
// para encriptar contrseñas
const bcrypt = require("bcrypt")
// llamado de token
const token = require("../services/token")

// crear usuario
async function addUser(req, res, next) {
	try {
		req.body.password = await bcrypt.hash(req.body.password, 10)
		const reg = await models.Usuario.create(req.body)
		res.status(200).json(reg)
	} catch (error) {
		res.status(500).send({
			message: "Ocurrio un error",
		})
		next(error)
	}
}

// Listar los usuarios
async function listUsers(req, res, next) {
	try {
		const valor = req.query.valor
		const reg = await models.Usuario.find(
			{
				$or: [
					{ nombre: new RegExp(valor, "i") },
					{ email: new RegExp(valor, "i") },
				],
			},
			{ createdAt: 0 }
		).sort({
			createdAt: -1,
		})
		res.status(200).json(reg)
	} catch (error) {
		res.status(500).send({
			message: "Ocurrio un error",
		})
		next(error)
	}
}



// Inicio de session
async function login(req, res, next) {
	try {
		const user = await models.Usuario.findOne({
			email: req.body.email,
		})
		if (user) {
			const match = await bcrypt.compare(req.body.password, user.password)
			if (match) {
				const tokenReturn = await token.encode(user._id, user.rol, user.email)
				res.status(200).json({ user, tokenReturn })
			} else {
				res.status(404).send({
					message: "Contraseña o email invalido, intente de nuevo",
				})
			}
		} else {
			res.status(404).send({
				message: "No existe usuario, intente de nuevo",
			})
		}
	} catch (error) {
		res.status(500).send({
			message: "Ocurrio un error",
		})
		next(error)
	}
}

module.exports = {
	addUser,
	listUsers,
	login,
}
