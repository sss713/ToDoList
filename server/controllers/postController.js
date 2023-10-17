import postService from "../modules/postService.js"

class PostController {
    async create(req, res) {
        try {
            const post = await postService.create(req)
            res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const post = await postService.getAll(req)
            res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const post = await postService.getOne(req)
            res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async update(req, res) {
        try {
            const post = await postService.update(req)
            res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async delete(req, res) {
        try {
            const post = await postService.delete(req)
            res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new PostController;