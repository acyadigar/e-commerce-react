import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
	images: {
    type: [String]
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
})

const ProductModel = mongoose.model('Product', productSchema)

export default ProductModel