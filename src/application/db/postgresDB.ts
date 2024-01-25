import pg from 'pg'
const { Pool } = pg

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: 5432, // default Postgres port
  database: process.env.POSTGRES_DB
})

console.log('Conexión a base de datos postgresql', pool.totalCount)

// export default {
//     query: (text, params) => pool.query(text, params),
// }
export default {
  query: (_: string, params: unknown) => params
}

export const postgresDB = (uri: string = '') => {
  console.log('Conectando a la base de datos postgres: ' + uri)
}
