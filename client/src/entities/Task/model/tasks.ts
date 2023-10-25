import { setTasks } from "./../../../shared/api/reducers/tasksReducer";
import axios from "axios";
import { Dispatch } from "redux";

export const set_tasks = (
  name: string,
  description: string,
  status: number,
  dedline: Date,
  completed: boolean
) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.post("/posts", {
        name,
        description,
        status,
        dedline,
        completed,
      });
      dispatch(setTasks(response.data.tasks));
    } catch (e) {
      console.log(e);
    }
  };
};
