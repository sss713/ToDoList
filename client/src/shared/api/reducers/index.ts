import { composeWithDevTools } from "redux-devtools-extension";
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import userReducer from "./userReducer";
import tasksReducer from "./tasksReducer";

const rootReducer = combineReducers({
  user: userReducer,
  // tasks: tasksReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
