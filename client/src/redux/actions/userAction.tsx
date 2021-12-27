import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../store/userStore";
import axios from "../../axios";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGOUT,
} from "../constants/userConstants";

export const login =
  (
    email: string,
    password: string
  ): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({
        type: USER_LOGIN_REQUEST,
      });
      //fetch data from backend (userInfo). interact with the backend using axios
      const res = await axios.post("/auth/login", { email, password });
      //pass this data to the reducer in the payload of the dispatch
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: res.data,
      });
      localStorage.setItem(
        "user",
        JSON.stringify(res.data) || JSON.stringify(null)
      );
    } catch (error) {
      //USER LOGIN FAIL
      dispatch({
        type: USER_LOGIN_FAILED,
        payload: error,
      });
      localStorage.setItem("user", JSON.stringify(null));
    }
  };

export const logout =
  (): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    dispatch({
      type: USER_LOGOUT,
    });
    localStorage.setItem("user", JSON.stringify(null));
  };
