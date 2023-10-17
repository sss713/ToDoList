import db from "../db.js";

class PostService {
    async create(post) {
        try {
            const createdPost = await db.query();
            const userId = post.userId;
            return createdPost;
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(post) {
        try {
            const createdPost = await db.query();
            const userId = post.userId;
            return createdPost;
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(post) {
        try {
            const createdPost = await db.query();
            const userId = post.userId;
            return createdPost;
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async update(post) {
        try {
            const createdPost = await db.query();
            const userId = post.userId;
            return createdPost;
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async delete(post) {
        try {
            const createdPost = await db.query();
            const userId = post.userId;
            return createdPost;
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new PostService;