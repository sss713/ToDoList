const SET_TASK = "SET_TASK";
const GET_TASKS = "GET_TASKS";
const GET_TASK = "GET_TASK";
const UPDATE_TASK = "UPDATE_TASK";
const REMOVE_TASK = "REMOVE_TASK";

const defaultState = {
  currentTasks: [],
};
export default function tasksReducer(state = defaultState, action: any) {
  switch (action.type) {
    case SET_TASK:
      return {
        ...state,
        posts: action.payload.posts,
      };
    case GET_TASKS:
      return { ...state };
    case GET_TASK:
      return {
        ...state,
        posts: action.payload.posts,
      };
    case UPDATE_TASK:
      return {
        ...state,
        posts: action.payload.posts,
      };
    case REMOVE_TASK:
      return {
        ...state,
        posts: action.payload.posts,
      };
    default:
      return state;
  }
}

export const setTask = (posts: any) => ({ type: SET_TASK, payload: posts });
export const getTask = (posts: any) => ({ type: GET_TASK, payload: posts });
export const getTasks = () => ({ type: GET_TASKS });
export const removeTask = (posts: any) => ({
  type: REMOVE_TASK,
  payload: posts,
});
export const updateTask = (posts: any) => ({
  type: UPDATE_TASK,
  payload: posts,
});
