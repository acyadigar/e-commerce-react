import { Router } from 'express'
import auth from './auth.js'
import product from './product.js'

const router = Router()

router.get('/', (req, res) => {
  res.end('hey')
})

router.use('/auth', auth)
router.use('/product', product)

export default router