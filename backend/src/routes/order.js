import express from 'express'
const router = express.Router()

import orders from '../controllers/order/orders'
import createOrder from '../controllers/order/create-order'

router.get('/', orders)
router.post('/', createOrder)

export default router