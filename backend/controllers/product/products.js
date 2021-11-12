import ProductService from '../../services/product-service.js'

const products = async (req, res) => {
  const products = await ProductService.findAll()
  res.send(products)
}

export default products