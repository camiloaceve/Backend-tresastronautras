const mongoose = require("mongoose")
const { MONGODB_URI } = require("../../config/config")

// conexion a la  base de datos

mongoose
	.connect(MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("Base de datos conectada:", mongoose.connection.name))
	.catch((err) => console.log("error al conectarse a la base de datos: ", err))
