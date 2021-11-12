import express from 'express'
const router = express.Router()

import products from '../controllers/product/products'
import addProduct from '../controllers/product/add-product'
import deleteProduct from '../controllers/product/delete-product'
import verifyToken from '../middlewares/verify-token'

router.get('/', products)
router.post('/', verifyToken, addProduct)
router.delete('/:id', verifyToken, deleteProduct)

export default router