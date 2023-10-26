const SET_USER = "SET_USER";
const LOGOUT = "LOGOUT";

const defaultState = {
  currentUser: {},
  id: null,
  isAuth: false,
};
export default function userReducer(state = defaultState, action: any) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        currentUser: action.payload.user,
        id: action.payload.user.id || null,
        isAuth: true,
      };
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        currentUser: {},
        id: null,
        isAuth: false,
      };
    default:
      return state;
  }
}

export const setUser = (user: any) => ({ type: SET_USER, payload: user });
export const logout = () => ({ type: LOGOUT });
