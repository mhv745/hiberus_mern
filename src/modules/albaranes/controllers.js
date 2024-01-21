import { getAlbaranById } from './repository.js'


export async function all(req, res) {
    const ids = [1, 2, 3]
    const albaranes = await Promise.all(ids.map(id => getAlbaranById(id)))
    res.json({
        data: albaranes,
        message: 'All albaranes'
    })
}

export async function get(req, res) {
    const { id } = req.params
    const albaran = await getAlbaranById(id)
    res.json({
        data: albaran,
        message: 'Albaran by id'
    })
}

export async function add(req, res) {
    const albaran = await getAlbaranById(4)
    res.json({
        data: albaran,
        message: 'Albaran added'
    })
}

export async function edit(req, res) {
    const { id } = req.params
    const albaran = await getAlbaranById(id)
    res.json({
        data: albaran,
        message: 'Albaran edited'
    })
}

export async function remove(req, res) {
    const { id } = req.params
    const albaran = await getAlbaranById(id)
    res.json({
        data: albaran,
        message: 'Albaran removed'
    })
}

