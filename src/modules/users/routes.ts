import { Router } from 'express'
import { all, get, add, edit, remove } from './controllers'
import { isAdmin, isAuthenticated, isOwner } from '../auth/middleware'

const router = Router()

// Aquí podemos ver el potencial de los middlewares. Estos se pueden compartir entre módulos, ya que son simples funciones.

router.get('/all', isAuthenticated, isAdmin, all)
router.get('/:id', isAuthenticated, isOwner, get)
router.post('/', isAuthenticated, isOwner, add)
router.put('/:id', isAuthenticated, isOwner, edit)
router.delete('/:id', isAuthenticated, isAdmin, remove)

export default router
