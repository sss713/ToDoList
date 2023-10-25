import { setTasks } from "./../../../shared/api/reducers/tasksReducer";
import axios from "axios";
import { Dispatch } from "redux";
const TasksRouter = require("../../../../../server/routes/post.routes");

// router.post('/posts', postController.create)
// router.get('/posts/all', postController.getAll)
// router.get('/posts/one', postController.getOne)
// router.put('/posts', postController.update)
// router.delete('/posts/del', postController.delete)
export const set_tasks = (
  name: string,
  description: string,
  status: number,
  dedline: Date,
  completed: boolean
) => {
  return async (dispatch: Dispatch) => {
    try {
      // dispatch(setTasks(response.data.tasks));
    } catch (e) {
      console.log(e);
    }
  };
};
