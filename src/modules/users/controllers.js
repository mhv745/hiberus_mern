import { getUserById } from './repository.js'


export async function all(req, res) {
    const ids = [1, 2, 3]
    const users = await Promise.all(ids.map(id => getUserById(id)))
    res.json({
        data: users,
        message: 'All users'
    })
}

export async function get(req, res) {
    const { id } = req.params
    const user = await getUserById(id)
    res.json({
        data: user,
        message: 'User by id'
    })
}

export async function add(req, res) {
    const user = await getUserById(4)
    res.json({
        data: user,
        message: 'User added'
    })
}

export async function edit(req, res) {
    const { id } = req.params
    const user = await getUserById(id)
    res.json({
        data: user,
        message: 'User edited'
    })
}

export async function remove(req, res) {
    const { id } = req.params
    const user = await getUserById(id)
    res.json({
        data: user,
        message: 'User removed'
    })
}

