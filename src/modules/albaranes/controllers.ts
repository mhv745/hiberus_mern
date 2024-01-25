import { Request, Response } from 'express'
import { byId } from './repository'

export async function all (_: Request, res: Response) {
  const ids = ['1', '2', '3']
  const albaranes = await Promise.all(ids.map(async (id) => await byId(id)))
  res.json({
    data: albaranes,
    message: 'All albaranes'
  })
}

export async function get (req: Request, res: Response) {
  const { id } = req.params
  const albaran = await byId(id)
  res.json({
    data: albaran,
    message: 'Albaran by id'
  })
}

export async function add (_: Request, res: Response) {
  const albaran = await byId('4')
  res.json({
    data: albaran,
    message: 'Albaran added'
  })
}

export async function edit (req: Request, res: Response) {
  const { id } = req.params
  const albaran = await byId(id)
  res.json({
    data: albaran,
    message: 'Albaran edited'
  })
}

export async function remove (req: Request, res: Response) {
  const { id } = req.params
  const albaran = await byId(id)
  res.json({
    data: albaran,
    message: 'Albaran removed'
  })
}
