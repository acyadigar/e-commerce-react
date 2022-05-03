import express from 'express'
const router = express.Router()

import products from '../controllers/product/products'
import product from '../controllers/product/product'
import addProduct from '../controllers/product/add-product'
import deleteProduct from '../controllers/product/delete-product'
import editProduct from '../controllers/product/edit-product'
import verifyToken from '../middlewares/verify-token'

router.get('/', products)
router.get('/:id', product)
router.post('/', verifyToken, addProduct)
router.put('/:id', verifyToken, editProduct)
router.delete('/:id', verifyToken, deleteProduct)

export default router