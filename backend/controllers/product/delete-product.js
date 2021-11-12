import Boom from 'boom'
import ProductService from "../../services/product-service.js"

const deleteProduct = async (req, res, next) => {
  const productId = req.params.id
  const product = await ProductService.find(productId)
  if(!product) return next(Boom.notFound('No product exist!'))

  const deletedProduct = await ProductService.del(product._id)
  res.send(`Product: ${deletedProduct._id} is deleted successfully!`)
}

export default deleteProduct
