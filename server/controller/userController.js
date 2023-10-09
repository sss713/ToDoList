import bcrypt from "bcryptjs";
import {check, validationResult} from "express-validator";
import db from "../db.js";

class UserController {
    async createUser(req, res){
        try {

            const validationRules = [
                check('email', "Uncorrect email").isEmail(),
                check('password', "password must be longer than 8 and shorter than 36").isLength({min:8,max:36})
            ];
            
            const errors = validationResult(req)
    
            if(!errors.isEmpty()) {
                return res.status(400).json({message: "Uncorrect request", errors})
            }
            
            // const candidate = req.bode
            const {email, password} = req.body
    
            const candidate = await db.query('SELECT login FROM users where login = $1', [email])
            console.log(candidate.rows)
    
            if (candidate.rows) {
                return res.status(400).json({message: `User with email: ${email} already exist`})
            } else {
                const hashPassword = await bcrypt.hash(password, 7)
                const user = await db.query('INSERT INTO users (login, password) values ($1, $2) RETURNING *', [email, hashPassword])
                return res.json(user.rows);
    
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