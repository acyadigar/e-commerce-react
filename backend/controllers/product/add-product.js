import Boom from 'boom'
import ProductService from "../../services/product-service.js"
import ProductSchema from './validations.js'

const addProduct = async (req, res, next) => {
  if (!req.payload.role === 'user') {
    return next(Boom.unauthorized('Unauthorized'))
  }
  
  const { error } = ProductSchema.validate(req.body)
  if(error) return next(Boom.badRequest('Bad Request!'))

  const product = await ProductService.add(req.body)
  res.send(product)
}

export default addProduct