export function isUser(req, res, next){
    const randomId = Math.floor(Math.random() * 100)
    req.userId = randomId
    next()
}

export function isAdmin(req, res, next){
    const randomId = Math.floor(Math.random() * 100)
    req.userId = randomId
    next()
}