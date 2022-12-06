const { Router } = require("express")
const usuarioRouter = require("./user")
const productoRouter = require("./product")

const router = Router()

router.use("/usuario", usuarioRouter)
router.use("/producto", productoRouter)

module.exports = router
