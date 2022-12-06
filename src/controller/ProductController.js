const models = require("../models")

async function addProduct ( req, res, next ){
    try {
        const product = await models.Producto.create(req.body)
		res.status(200).json(product)
    } catch (error) {
        res.status(500).send({
			message: "Ocurrio un error",
		})
		next(error)
    }
}

async function getProduct ( req, res, next ){
    try {
        const product = await models.Producto.find()
                        .populate('owner', {name: 1})
                        .lean()
                        .sort({createdAt: -1})
        res.status(200).json(product)
    } catch (error) {
        res.status(500).send({
            message: 'Ocurrio un error'
          })
          next(error)
    }
}

async function updateProduct ( req, res, next ){
    try {
        const { id } = req.params
        await models.Producto.findOneAndUpdate(
            { _id: id},
            {
                owner: req.body.owner,
                name: req.body.name,
                price: req.body.price
            }
            )
            res.status(200).json("Actulizado con exíto")
    } catch (error) {
        res.status(500).send({
			message: "Ocurrio un error",
		})
		next(error)
    }
}

async function deleteProduct(req, res, next) {
    try {
        const { id } = req.params

        const prod = await models.Producto.findById({_id: id})

        if (!prod) {
            return res.status(400).json(
				{ Error: 'Producto no encontrado, intente de nuevo' })
        }
	    await models.Producto.deleteOne({ _id: id })
        return res.status(200).json({message:'Se ha eliminado' ,prod})
    } catch (error) {
        
    }
}


module.exports = {
    addProduct,
    getProduct,
    updateProduct,
    deleteProduct
}