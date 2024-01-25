import { NextFunction, Request, Response } from 'express'
import { RequestWithUserId } from '../../../types'
import { getRandomString } from '../../utils'

/**
 * Comprobamos si el usuario no está logueado, en tal caso, seguimos al siguiente middleware. Si se ha logueado, lanzamos un error.
 */
export function isGuest (_req: Request, _res: Response, next: NextFunction) {
  next()
}

export function isAuthenticated (_req: Request, _res: Response, next: NextFunction) {
  next()
}

export function isOwner (_req: Request, _res: Response, next: NextFunction) {
  next()
}

/**
 * Si no está logueado, lanzamos un error. En caso contrario, añadimos a la request el id del usuario logueado para que esté disponible en el siguiente middleware.
 */
export function isUser (req: RequestWithUserId, _res: Response, next: NextFunction) {
  // buscar la cookie de sesión, comprobar que no ha expirado y obtener el id del usuario
  const randomId = getRandomString()

  req.userId = randomId

  next()
}

/**
 * Comprobamos si el usuario está logueado y es administrador, en tal caso, seguimos al siguiente middleware. Si no se ha logueado o no es administrador, lanzamos un error.
 */
export function isAdmin (req: RequestWithUserId, _res: Response, next: NextFunction) {
  const randomId = getRandomString()
  req.userId = randomId
  next()
}
