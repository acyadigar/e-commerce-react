import OrderModel from '../models/order'

class OrderService {
  model = OrderModel

  async findAll() {
    return this.model.find()
  }

  async create(order) {
    return this.model.create(order)
  }
}

export default new OrderService()