import 'express-async-errors'
import express from 'express'
import { routes } from './routes'
import morgan from 'morgan'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import { cors, json } from './util'

const getApp = () => {
  const app = express()

  app.use(helmet()) // Cabeceras de seguridad en respuestas HTTP
  app.use(cors) // Cross Origin Resource Sharing
  app.use(json) // Parsea el body de las peticiones HTTP
  app.use(morgan('dev')) // Logs de las peticiones HTTP
  app.use(cookieParser()) // Parsea las cookies de las peticiones HTTP

  app.use('/api', routes) // Rutas de la aplicación

  return app
}

export const app = getApp()
