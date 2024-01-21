export const legacyDB = (uri) => {
    console.log("Conectando a la base de datos legacy: " + uri)
}

export default {
    query: (text, params) => params,
}
