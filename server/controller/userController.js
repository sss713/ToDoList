import bcrypt from "bcryptjs";
import db from "../db.js";

class UserController {
    async createUser(req, res){ 
        try {

            const {login, password} = req.body

            if (login.length > 3 && login.length < 20){

                if (password.length > 8 && password.length < 36){

                    const candidate = await db.query('SELECT login FROM users where login = $1', [login])
                    if (candidate.rows[0] && candidate.rows[0].login === login) {
                        return res.status(400).json({message: `User with login: ${login} already exist`})
                    } else {
                        const hashPassword = await bcrypt.hash(password, 7)
                        const user = await db.query('INSERT INTO users (login, password) values ($1, $2) RETURNING *', [login, hashPassword])
                        return res.json(user.rows);
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
    }

    async getUsers(req, res){

    }

    async getOneUser(req, res){

    }

    async updateUser(req, res){

    }

    async deleteUser (req, res){
        
    }
}

export default new UserController()