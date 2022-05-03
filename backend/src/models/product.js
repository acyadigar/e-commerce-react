import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
	images: {
    type: [String]
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: false
  },
  price: {
    type: Number,
    required: true
  },
  description: {
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