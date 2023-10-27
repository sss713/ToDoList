import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import config from "config"
import db from "../db.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = new Router();

router.post('/registration',
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

router.post('/authorization',

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
                        id: candidate.rows[0].user_id,
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

router.post('/tgauthorization',

async (req, res) => {

    try {
        const {login, password, telegramid} = req.body
        const candidate = await db.query('SELECT user_id, login, nickname, password FROM users where login = $1', [login])
        if (candidate.rows.length === 0 || candidate.rows[0].login !== login) {
            return res.status(400).json({message: "Invalid password or username"})
        } else {
            const userid = candidate.rows[0].user_id
            const isPassValid = bcrypt.compareSync(password, candidate.rows[0].password)
            if (!isPassValid) {
                return res.status(400).json({message: "Invalid password or username"})
            } else {
            const token = jwt.sign({id: candidate.rows[0].id}, config.get("authRouter.secretKey"), {expiresIn: "1h"})
            const user = await db.query('INSERT INTO tg_users (user_id, telegram_id) values ($1, $2) RETURNING *', [userid, telegramid])
                return res.json({
                    user: {
                        id: userid,
                        telegramid: telegramid,
                    }
                })
            }
        }

    } catch (e) {
        console.log(e);
        return res.send({message:"Server error"})
    }
    

})

router.post('/tgalerts',

async (req, res) => {

    try {
        const {telegram_id, enable_alerts} = req.body
        const candidate = await db.query('SELECT telegram_id, enable_alerts FROM tg_users where telegram_id = $1', [telegram_id])
        if (!enable_alerts) {
            return res.json({
                user: {
                    id: candidate.rows[0].telegram_id,
                    enable_alerts: candidate.rows[0].enable_alerts,
                }
            })
        } else {
            if (candidate.rows.length === 0) {
                return res.status(400).json({message: "Invalid password or username"})
            } else {
                const user = await db.query('UPDATE tg_users SET enable_alerts = $1 WHERE telegram_id = $2 RETURNING *;', [enable_alerts, telegram_id])
                    return res.json({
                        user: {
                            id: user.rows[0].telegram_id,
                            enable_alerts: user.rows[0].enable_alerts,
                        }
                    })
                }
        }
        }

    catch (e) {
        console.log(e);
        return res.send({message:"Server error"})
    }
    

})

// router.get('/auth', authMiddleware,
//     async (req, res) => {
//         try {
//             const user = await User.findOne({_id: req.user.id})
//             const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "1h"})
//             return res.json({
//                 token,
//                 user: {
//                     id: user.id,
//                     email: user.email,
//                     diskSpace: user.diskSpace,
//                     usedSpace: user.usedSpace,
//                     avatar: user.avatar
//                 }
//             })
//         } catch (e) {
//             console.log(e)
//             res.send({message: "Server error"})
//         }
//     })

router.get('/auth', authMiddleware,
    async (req, res) => {
        try {
        const {login} = req.body
        const user = await db.query('SELECT id, login, nickname,cd password FROM users where login = $1', [login])
        console.log(req.id)
        const token = jwt.sign({id: candidate.rows[0].user_id}, config.get("authRouter.secretKey"), {expiresIn: "1h"})
        console.log(token)
                return res.json({
                    token,
                    user: {
                        id: candidate.rows[0].user_id,
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