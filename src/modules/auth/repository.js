import db from "../../application/db/postgresDB.js"
import dbLegacy from "../../application/db/legacyDB.js"

export async function getUserById(id){
    const fakeUser = {
        id,
        name: 'John Doe',
        email: 'johndoe@gmail.com'
    }

    let user = userDTO(await db.query(`SELECT * FROM users WHERE id = ${id}`, fakeUser))

    /**
     * Por ejemplo, si user no existe, se lee de la base de datos legacy y se guarda en la nueva BD:
     */
    if(!user){
        const userLegacy = await dbLegacy.query('', fakeUser)
        await db.query(`INSERT INTO users VALUES (${userLegacy.id}, ${userLegacy.name}, ${userLegacy.email})`)
        user = userDTOLegacy(userLegacy)
    }
        

    return user
}

const userDTO = (user) => user
const userDTOLegacy = (user) => user