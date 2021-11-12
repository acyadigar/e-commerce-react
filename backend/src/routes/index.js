import { Router } from 'express'
const router = Router()

import auth from './auth'
import product from './product'
import order from './order'

router.get('/', (req, res) => {
  res.end('hey')
})

router.use('/auth', auth)
router.use('/product', product)
router.use('/order', order)

export default router