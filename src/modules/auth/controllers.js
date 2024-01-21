//import db from "../../application/db/postgresDB.js"

import { getUserById } from './repository.js'

export async function refresh(req, res){
   return res.json({
       message: 'Refresh token'
   })
}

export async function current(req, res){
    const userId = req.userId

    if(!userId){
        return res.status(401).json({
            message: 'Unauthorized'
        })
    }

    /**
     * TODO Obtener el usuario de la base de datos correspondiente. Se puede utilizar
     * una función en un archivo independiente que sincronice la información de las distintas
     * bases de datos y devuelva el dato solicitado.
     */
    const user = await getUserById(userId)

    return res.json({
        data: user,
        message: 'Current User'
    })
 }