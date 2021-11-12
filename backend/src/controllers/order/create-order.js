import Boom from 'boom'
import OrderService from '../../services/order-service'
import OrderSchema  from './validations'

const createOrder = async (req, res, next) => {
  const { error } = OrderSchema.validate(req.body)
  if(error) return next(Boom.badRequest('Bad Request!'))

  const order = await OrderService.create(req.body)
  res.send(order)
}

export default createOrder