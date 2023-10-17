import { Router } from "express";
import postController from "../controllers/postController";

const router = new Router()



router.post('/posts', postController.create)
router.get('/posts/all', postController.getAll)
router.get('/posts/:id', postController.getOne)
router.put('/posts', postController.update)
router.delete('/posts/:id', postController.delete)