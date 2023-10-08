import { Router } from "express";
import userController from "../controller/userController.js";

const router = new Router();

router.post('/user', userController.createUser)
router.get('/user', userController.createUser)
router.get('/user/id:', userController.getUser)
router.put('/user/id:', userController.updateUser)
router.delete('/user/id:', userController.deleteUser)

module.exports = router;