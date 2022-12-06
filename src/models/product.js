const mongoose = require("mongoose")
const { Schema } = mongoose;


const productSchema =  new Schema(
    {
        owner: {
            type: Schema.Types.ObjectId,
            ref:'usuario'
        },
        name: {
            type: String,
            maxLength: 64,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
    },
    { timestamps: true }
)

const Producto = mongoose.model("producto", productSchema)
module.exports = Producto