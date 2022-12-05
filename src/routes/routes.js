const { Router } = require("express")
const usuarioRouter = require("./user")

const router = Router()

router.use("/usuario", usuarioRouter)

module.exports = router
