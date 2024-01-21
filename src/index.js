import "dotenv/config.js"

import { app } from "./application/app.js"
import {legacyDB, postgresDB} from "./application/db/index.js"



const port = process.env.PORT
const legacyDBUri = process.env.LEGACY_DB
const postgresDBUri = process.env.POSTGRES_DB

app.listen(port, () => {
	console.log(`Servidor: http://localhost:${port}`)
})

legacyDB(legacyDBUri)
postgresDB(postgresDBUri)