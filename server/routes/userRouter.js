import { Router } from "express";
import userController from "../controller/userController";

const router = new Router();

router.post('/user', userController.createUser)
router.get('/user')