// import db from "../../application/db/postgresDB"
// import dbLegacy from "../../application/db/legacyDB"
import { User } from './types'
import { getRandomString } from '../../utils'

const fakeUser: User = {
  id: getRandomString(),
  name: 'John Doe',
  email: 'johndoe@example.com'
}

export async function byEmail (email: string): Promise<User> {
  console.log('Buscando usuario en la base de datos...')
  return fakeUser
}

export async function byId (id: string): Promise<User> {
  console.log('Buscando usuario en la base de datos...')
  return fakeUser
}

export async function save (data: Partial<User & { password: string }>): Promise<User> {
  console.log('Guardando usuario en la base de datos...')
  return fakeUser
}

export async function update (id: string, data: Partial<User>): Promise<User> {
  console.log('Actualizando usuario en la base de datos...')
  return fakeUser
}

export async function remove (id: string): Promise<User> {
  console.log('Eliminando usuario de la base de datos...')
  return fakeUser
}
