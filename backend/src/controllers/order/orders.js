import OrderService from '../../services/order-service'

const orders = async (req, res) => {
  const orders = OrderService.findAll()
  res.send(orders)
}

export default orders