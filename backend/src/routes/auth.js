import express from 'express'
const router = express.Router()

import users from '../controllers/auth/users'
import register from '../controllers/auth/register'
import login from '../controllers/auth/login'
import me from '../controllers/auth/me'
import verifyToken from '../middlewares/verify-token'

router.get('/users', users)
router.post('/me', verifyToken, me)
router.post('/register', register)
router.post('/login', login)

export default router