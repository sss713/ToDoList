import { Router } from "express";
import bcrypt from "bcryptjs";
import {check, validationResult} from "express-validator";
import User from "/db.js"; //temp 
import { has } from "config";

const router = new Router();

router.post('/registration',
[
    check('email', "Uncorrect email").isEmail(),
    check('password', "password must be longer than 8 and shorter than 36").isLength({min:8,max:36})
],

async (req, res) => {
    try {
        const errors = validationResult(req)

        if(!errors.isEmpty()) {
            return res.status(400).json({message: "Uncorrect request", errors})
        }

        const {email, password} = req.body

        const candidate = User.findOne({email})

        if (candidate) {
            return res.status(400).json({message: `User with email: ${email} already exist`})
        } else {
            const hashPassword = await bcrypt.hash(password, 7)
            const user = new User({email})
            await user.save()

        }
    } catch (e) {
        console.log(e);
        res.send({message:"Server error"})
    }
})

module.exports = router;