import { Response } from 'express'
import { RequestWithUserId } from '../../../types'
import { byId } from './repository'

export async function all (req: RequestWithUserId, res: Response) {
  const ids = ['1', '2', '3']
  const users = await Promise.all(ids.map(async (id) => await byId(id)))

  res.json({
    data: users,
    message: 'All users'
  })
}

export async function get (req: RequestWithUserId, res: Response) {
  const { id } = req.params
  const user = await byId(id)
  res.json({
    data: user,
    message: 'User by id'
  })
}

export async function add (req: RequestWithUserId, res: Response) {
  const user = await byId('4')
  res.json({
    data: user,
    message: 'User added'
  })
}

export async function edit (req: RequestWithUserId, res: Response) {
  const { id } = req.params
  const user = await byId(id)
  res.json({
    data: user,
    message: 'User edited'
  })
}

export async function remove (req: RequestWithUserId, res: Response) {
  const { id } = req.params
  const user = await byId(id)
  res.json({
    data: user,
    message: 'User removed'
  })
}

export async function current (req: RequestWithUserId, res: Response) {
  const userId = req.userId

  if (!userId) {
    return res.status(401).json({
      data: null,
      message: 'Unauthorized'
    })
  }

  /**
     * TODO Obtener el usuario de la base de datos correspondiente. Se puede utilizar
     * una función en un archivo independiente que sincronice la información de las distintas
     * bases de datos y devuelva el dato solicitado.
     */
  const user = await byId(userId)

  return res.json({
    data: user,
    message: 'Current User'
  })
}
