import db from "../db.js";

class PostService {
    async create(post) {
        try {
            const { TDtask_name, TDtask_description, TDtask_status, TDtask_deadline, TDtask_completed, userId } = post.body
            const createdPost = await db.query('WITH inserted_task AS ( INSERT INTO ToDoTask (TDtask_name, TDtask_description, TDtask_status, TDtask_deadline, TDtask_completed) VALUES ($1, $2, $3, $4, $5) RETURNING *) INSERT INTO nd (TDtask_id, user_id) SELECT TDtask_id, $6 FROM inserted_task RETURNING *', [TDtask_name, TDtask_description, TDtask_status, TDtask_deadline, TDtask_completed, userId]);
            return createdPost;
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(post) {
        try {
            const { userId } = post.query
            const createdPost = await db.query('SELECT t.* FROM ToDoTask t INNER JOIN nd n ON t.TDtask_id = n.TDtask_id WHERE n.user_id = $1;', [userId]);
            return createdPost;
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(post) {
        try {
            const { taskId, userId } = post.query
            const createdPost = await db.query('SELECT t.* FROM ToDoTask t INNER JOIN nd n ON t.TDtask_id = n.TDtask_id WHERE t.TDtask_id = $1 AND n.user_id = $2;', [taskId, userId]);
            return createdPost;
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async update(post) {
        try {
            const { TDtask_name, TDtask_description, TDtask_status, TDtask_deadline, TDtask_completed, taskId, userId } = post.body
            const createdPost = await db.query('UPDATE ToDoTask SET TDtask_name = $1, TDtask_description = $2, TDtask_status = $3, TDtask_deadline = $4 TDtask_completed = $5 WHERE TDtask_id = $6 AND TDtask_id IN (SELECT TDtask_id FROM nd WHERE user_id = $7)RETURNING *;', [TDtask_name, TDtask_description, TDtask_status, TDtask_deadline, TDtask_completed, taskId, userId]);
            return createdPost;
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async delete(post) {
        try {
            const { taskId, userId } = post.query
            const createdPost = await db.query('DELETE FROM nd WHERE TDtask_id = $1 AND user_id = $2 RETURNING *;', [taskId, userId])
            const del2 = await db.query('DELETE FROM ToDoTask WHERE TDtask_id = $1 RETURNING *;', [taskId]);
            return createdPost;
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new PostService;