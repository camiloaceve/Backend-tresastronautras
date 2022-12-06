const { Router } = require("express")

const {
    addProduct,
    getProduct,
    updateProduct,
    deleteProduct

} = require("../controller/ProductController")

const auth = require("../middlewares/auth")

const router = Router()

router.post("/", auth.verifyUser, addProduct)
router.get("/", auth.verifyUser, getProduct)
router.put("/:id", auth.verifyUser, updateProduct)
router.delete("/:id", auth.verifyUser, deleteProduct)



module.exports = router
