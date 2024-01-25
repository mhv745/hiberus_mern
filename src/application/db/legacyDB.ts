export const legacyDB = (uri: string) => {
  console.log('Conectando a la base de datos legacy: ' + uri)
}

export default {
  query: (_: string, params: unknown) => params
}
