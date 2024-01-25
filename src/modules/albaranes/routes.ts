import { Router } from 'express'
import { all, get, add, edit, remove } from './controllers'

const router = Router()

router.get('/all', all)
router.get('/:id', get)
router.post('/', add)
router.put('/:id', edit)
router.delete('/:id', remove)

export default router
