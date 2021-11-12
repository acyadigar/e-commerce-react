import { Router } from 'express'
import auth from './auth'
import product from './product'

const router = Router()

router.get('/', (req, res) => {
  res.end('hey')
})

router.use('/auth', auth)
router.use('/product', product)

export default router