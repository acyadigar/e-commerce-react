import express from 'express'
const router = express.Router()

import register from '../controllers/auth/register.js'
import login from '../controllers/auth/login.js'

router.post('/register', register)
router.post('/login', login)

export default router