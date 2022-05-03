import ProductModel from '../models/product'

class ProductService {
  model = ProductModel

  async findAll() {
    return this.model.find()
  }

  async find(id) {
    return this.model.findById(id)
  }

  async findName(name) {
    return this.model.findOne({ name: name });
  }

  async del(id) {
    return this.model.findByIdAndDelete(id)
  }

  async add(product) {
    return this.model.create(product)
  }

  async update(product_id, newProductData) {
    return await this.model.findByIdAndUpdate(product_id, newProductData, {
			new: true,
		});
  }
}

export default new ProductService()