import { Request, Response } from 'express'
import { byEmail, save } from '../users/repository'

// import db from "../../application/db/postgresDB"

export async function login (req: Request, res: Response) {
  const { email, password } = req.body
  console.log(password)
  const user = byEmail(email)

  // Existe?
  // Coincide la contraseña?
  // Generar token
  // Guardar token en cookie?

  return res.json({
    data: user,
    message: 'Login'
  })
}

export async function register (req: Request, res: Response) {
  const user = save(req.body)

  return res.json({
    data: user,
    message: 'Register'
  })
}

export async function logout (_: Request, res: Response) {
  return res.json({
    message: 'Logout'
  })
}

export async function refresh (_: Request, res: Response) {
  return res.json({
    message: 'Refresh token'
  })
}
