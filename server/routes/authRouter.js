import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import config from "config"
import db from "../db.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = new Router();

router.post('http://localhost:5000/api/registration',
async (req, res) => {
    try {

        const {login, password, nickname} = req.body

        if (login.length > 3 && login.length < 20){

            if (password.length > 8 && password.length < 36){

                const candidate = await db.query('SELECT login FROM users where login = $1', [login])
                if (candidate.rows[0] && candidate.rows[0].login === login) {
                    return res.status(400).json({message: `User with login: ${login} already exist`})
                } else {
                    const hashPassword = await bcrypt.hash(password, 7)
                    const user = await db.query('INSERT INTO users (login, password, nickname) values ($1, $2, $3) RETURNING *', [login, hashPassword, nickname])
                    return res.status(200).json({message: `Hi ${login}! Registration successful!`});
                }

            } else {
                return res.status(400).json({message: "password must be longer than 8 and shorter than 36"})
            }
        } else {
            return res.status(400).json({message: "login must be longer than 3 and shorter than 20"})
        }
       
    } catch (e) {
        console.log(e);
        return res.send({message:"Server error"})
    }
})

router.post('http://localhost:5000/api/authorization',

async (req, res) => {

    try {
        const {login, password} = req.body
        const candidate = await db.query('SELECT user_id, login, nickname, password FROM users where login = $1', [login])
        if (candidate.rows.length === 0 || candidate.rows[0].login !== login) {
            return res.status(400).json({message: "Invalid password or username"})
        } else {
            const isPassValid = bcrypt.compareSync(password, candidate.rows[0].password)

            if (!isPassValid) {
                return res.status(400).json({message: "Invalid password or username"})
            } else {
                const token = jwt.sign({id: candidate.rows[0].id}, config.get("authRouter.secretKey"), {expiresIn: "1h"})
                return res.json({
                    token,
                    user: {
                        id: candidate.rows[0].id,
                        login: candidate.rows[0].login,
                        nickname: candidate.rows[0].nickname,
                    }
                })
            }
        }

    } catch (e) {
        console.log(e);
        return res.send({message:"Server error"})
    }
    

})

router.get('http://localhost:5000/api//auth', authMiddleware,
    async (req, res) => {
        try {
        const {login} = req.body
        const user = await db.query('SELECT id, login, nickname,cd password FROM users where login = $1', [login])
        console.log(req.id)
        const token = jwt.sign({id: candidate.rows[0].id}, config.get("authRouter.secretKey"), {expiresIn: "1h"})
        console.log(token)
                return res.json({
                    token,
                    user: {
                        id: candidate.rows[0].id,
                        login: candidate.rows[0].login,
                        nickname: candidate.rows[0].nickname,
                    }
                })
    } catch (e) {
        console.log(e);
        return res.send({message:"Server error"})
    }
    

})

export default router;