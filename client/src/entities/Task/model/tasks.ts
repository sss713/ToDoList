import {
  getTask,
  getTasks,
  removeTask,
  setTask,
  updateTask,
} from "./../../../shared/api/reducers/tasksReducer";
import axios from "axios";
import { Dispatch } from "redux";
const TasksRouter = require("../../../../../server/routes/postRouter");

export const createPost = (
  name: string,
  description: string,
  status: number,
  deadline: Date,
  completed: boolean,
  userId: number
) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.post("http://localhost:5000/api/posts", {
        name,
        description,
        status,
        deadline,
        completed,
        userId,
      });
      dispatch(setTask(response.data.posts));
      console.log(response.data.message);
    } catch (e) {
      console.log(e);
    }
  };
};

export const getAllPosts = (userId: number) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.post("http://localhost:5000/api/posts/all", {
        userId,
      });
      dispatch(getTasks());
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };
};

export const getOnePost = (taskId: number, userId: number) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.post("http://localhost:5000/api/posts/one", {
        taskId,
        userId,
      });
      dispatch(getTask(response.data.posts));
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };
};

export const updatePost = (
  name: string,
  description: string,
  status: number,
  deadline: Date,
  completed: boolean,
  taskId: number,
  userId: number
) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.post("http://localhost:5000/api/posts", {
        name,
        description,
        status,
        deadline,
        completed,
        taskId,
        userId,
      });
      dispatch(updateTask(response.data.posts));
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };
};

export const deletePost = (taskId: number, userId: number) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.post("http://localhost:5000/api/posts/del", {
        taskId,
        userId,
      });
      dispatch(removeTask(response.data.posts));
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };
};
