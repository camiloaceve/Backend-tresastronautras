const mongoose = require("mongoose")

// User schema
const userSchema = new mongoose.Schema(
	{
		rol: {
			type: String,
			maxLength: 30,
			default: "user",
		},

		name: {
			type: String,
			trim: true,
			required: true,
			max: 64,
		},
		email: {
			type: String,
			trim: true,
			required: true,
			unique: true,
			lowercase: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
)

const Usuario = mongoose.model("usuario", userSchema)
module.exports = Usuario
