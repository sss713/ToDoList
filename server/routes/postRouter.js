import { Router } from "express";
import { PostController } from "../controllers/postController.js";

const router = new Router()

const postController = new PostController()

router.post('/posts', postController.create)
router.get('/posts/all', postController.getAll)
router.get('/posts/:id', postController.getOne)
router.put('/posts', postController.update)
router.delete('/posts/:id', postController.delete)

export default router;