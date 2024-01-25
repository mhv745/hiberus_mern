import { Router } from 'express'
import authRoutes from '../modules/auth/routes'
import usersRoutes from '../modules/users/routes'
import albaranesRoutes from '../modules/albaranes/routes'

const router = Router()

/**
 * Podemos activar o desactivar módulos de la aplicación por ejemplo con un feature flag
 */
router.use('/auth', authRoutes)
router.use('/users', usersRoutes)
router.use('/albaranes', albaranesRoutes)

export const routes = router
