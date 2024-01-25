import { app } from './application/app'
import { legacyDB, postgresDB } from './application/db/index'

const base = process.env.BASE_URL ?? ''
const port = process.env.PORT ?? '3000'
const legacyDBUri = process.env.LEGACY_DB
const postgresDBUri = process.env.POSTGRES_DB

app.listen(port, () => {
  console.log(`Servidor: ${base}:${port}`)
})

legacyDB(legacyDBUri ?? '')
postgresDB(postgresDBUri ?? '')
