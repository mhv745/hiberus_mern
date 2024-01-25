import express from 'express'
import Cors from 'cors'

const port = process.env.PORT
const base_url = process.env.BASE_URL
const UPLOAD_LIMIT_SIZE = '16mb'

/**
 * Permitimos el acceso a la api desde cualquier origen
 */
export const cors = Cors({
  origin: `${base_url}${port ? `:${port}` : ''}`,
  credentials: true
})

/**
 * Limitamos el tamaño de los datos que se pueden enviar en una petición a 16MB
 */
export const json = express.json({
  limit: UPLOAD_LIMIT_SIZE
})
