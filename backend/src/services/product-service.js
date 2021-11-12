import ProductModel from '../models/product'

class ProductService {
  model = ProductModel

  async findAll() {
    return this.model.find()
  }

  async find(id) {
    return this.model.findById(id)
  }

  async del(id) {
    return this.model.findByIdAndDelete(id)
  }

  async add(product) {
    return this.model.create(product)
  }
}

export default new ProductService()