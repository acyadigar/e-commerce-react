import Boom from 'boom'
import ProductService from "../../services/product-service"
import ProductSchema from './validations'

const addProduct = async (req, res, next) => {
  if (req.payload._doc.role === 'user') {
    return next(Boom.unauthorized('Unauthorized'))
  }
  
  const { error } = ProductSchema.validate(req.body)
  if(error) return next(Boom.badRequest('Bad Request!'))

  const isExist = await ProductService.findName(req.body.name)
  if(isExist) return next(Boom.conflict('Already Exists!'))

  const product = await ProductService.add(req.body)
  res.send(product)
}

export default addProduct