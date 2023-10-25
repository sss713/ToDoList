import axios from "axios";
import { Dispatch } from "redux";
import { setUser } from "shared/api/reducers/userReducer";

export const registration = (
  login: string,
  password: string,
  nickname: string
) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/registration",
        {
          login,
          password,
          nickname,
        }
      );
      dispatch(setUser(response.data.user));
      localStorage.setItem("token", response.data.token);
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };
};

export const login = (login: string, password: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/authorization",
        {
          login,
          password,
        }
      );
      dispatch(setUser(response.data.user));
      localStorage.setItem("token", response.data.token);
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };
};

export const auth = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get("http://localhost:5000/api/auth", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      dispatch(setUser(response.data.user));
      localStorage.setItem("token", response.data.token);
      console.log(response.data);
    } catch (e) {
      console.log(e);
      localStorage.removeItem("token");
    }
  };
};
