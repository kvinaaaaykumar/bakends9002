const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    productName : String,
    brandName : String,
    brandName2 : String,
    date : Date,
    category : String,
    productImage : [],
    description : String,
    price : Number,
    sellingPrice : String
},{
    timestamps : true
})


const productModel = mongoose.model("product",productSchema)

module.exports = productModel