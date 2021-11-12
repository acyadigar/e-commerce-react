import express from 'express'
const router = express.Router()

import products from '../controllers/product/products.js'
import addProduct from '../controllers/product/add-product.js'
import deleteProduct from '../controllers/product/delete-product.js'
import verifyToken from '../middlewares/verify-token.js'

router.get('/', products)
router.post('/', verifyToken, addProduct)
router.delete('/:id', verifyToken, deleteProduct)

export default router