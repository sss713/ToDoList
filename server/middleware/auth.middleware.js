import jwt from "jsonwebtoken"
import config from "config"

export const authMiddleware = (req, res, next) => {
    if(req.method === 'OPTIONS') {
        return next()
    }

    try {
        const token = req.headers.authorization.split('')[1]
        if (!token) {
            return res.status(401).json({message: "Auth err"})
        }
        const decoded = jwt.verify(token, config.get('authRouter.secretKey'))
        req.user = decoded
        next()
    } catch (e) {
        return res.status(400).json(e)
    }
}