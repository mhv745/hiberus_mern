import { Router } from 'express'
import { login, logout, refresh, register } from './controllers'
import { isAuthenticated, isGuest } from './middleware'

const router = Router()

router.post('/login', isGuest, login)
router.post('/register', isGuest, register)
router.post('/logout', isAuthenticated, logout)
router.get('/refresh', refresh)

export default router
