import { Router } from 'express'
import {refresh,current} from './controllers.js'
import { isUser } from './middleware.js'

const router = Router()

router.get('/refresh', refresh)
router.get('/current',isUser ,current)

export default router