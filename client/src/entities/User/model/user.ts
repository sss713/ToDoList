import axios from "axios";
import { Dispatch } from "redux";
import { setUser } from "shared/api/reducers/userReducer";

export const registration = async (email: string, password: string) => {
  try {
    const response = await axios.post("/registration", {
      email,
      password,
    });
    console.log(response.data.message);
  } catch (e) {
    console.log(e);
  }
};

export const login = (email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.post("/authorization", {
        email,
        password,
      });
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
      const response = await axios.get("/auth", {
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
