const SET_TASKS = "SET_TASKS";
const TASKS = "TASKS";
const REMOVE_TASKS = "REMOVE_TASKS";

const defaultState = {
  currentTasks: [],
};
export default function tasksReducer(state = defaultState, action: any) {
  switch (action.type) {
    case SET_TASKS:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
}

export const setTasks = (posts: any) => ({ type: SET_TASKS, payload: posts });
