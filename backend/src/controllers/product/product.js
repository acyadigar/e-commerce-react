import Boom from 'boom'
import ProductService from '../../services/product-service'

const product = async (req, res, next) => {
  const product = await ProductService.find(req.params.id)
  if(!product) return next(Boom.notFound('No product exist!'))

  res.send(product)
}

export default product