import Boom from 'boom'
import ProductService from "../../services/product-service"

const editProduct = async (req, res, next) => {
  const product = await ProductService.find(req.params.id)
  if(!product) return next(Boom.notFound('No product exist!'))

  const updatedProduct = await ProductService.update(product._id, req.body)
  res.send(`Product: ${updatedProduct._id} is updated successfully!`)
}

export default editProduct
