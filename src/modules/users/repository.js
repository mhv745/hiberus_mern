const fakeUser = (id) => ({
    id,
    name: 'John Doe',
    email: 'johndoe@gmail.com'
})

const userDTO = (user) => user

export async function getUserById(id){
    const user = userDTO(fakeUser(id))

    return user
}