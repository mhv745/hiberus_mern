// import db from "../../application/db/postgresDB"
// import dbLegacy from "../../application/db/legacyDB"
import { Albaran } from './types'
import { getRandomString } from '../../utils'

const fakeAlbaran: Albaran = {
  id: getRandomString(),
  title: 'Albaran ' + getRandomString(),
  date: '2021-01-01'
}

export async function byId (id: string): Promise<Albaran> {
  console.log('Buscando albaran en la base de datos...')
  return fakeAlbaran
}

export async function save (data: Partial<Albaran>): Promise<Albaran> {
  console.log('Guardando albaran en la base de datos...')
  return fakeAlbaran
}

export async function update (id: string, data: Partial<Albaran>): Promise<Albaran> {
  console.log('Actualizando albaran en la base de datos...')
  return fakeAlbaran
}

export async function remove (id: string): Promise<Albaran> {
  console.log('Eliminando albaran de la base de datos...')
  return fakeAlbaran
}
