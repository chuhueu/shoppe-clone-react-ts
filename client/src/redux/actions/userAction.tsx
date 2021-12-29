import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../store/userStore";
import axios from "../../axios";
import { AxiosResponse } from "axios";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILED,
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
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      //fetch data from backend (userInfo). interact with the backend using axios
      const { data } = await axios.post(
        "/auth/login",
        { email, password },
        config
      );
      //pass this data to the reducer in the payload of the dispatch
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      //USER LOGIN FAIL
      dispatch({
        type: USER_LOGIN_FAILED,
        payload: error,
      });
    }
  };

export const register =
  (
    username: string,
    email: string,
    password: string
  ): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      //fetch data from backend (userInfo). interact with the backend using axios
      const { data } = await axios.post(
        "/auth/register",
        {
          username,
          email,
          password,
        },
        config
      );
      //pass this data to the reducer in the payload of the dispatch
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      //USER LOGIN FAIL
      dispatch({
        type: USER_REGISTER_FAILED,
        payload: error,
      });
    }
  };

export const logout =
  (): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    axios
      .get("/auth/logout", {
        withCredentials: true,
      })
      .then((res: AxiosResponse) => {
        if (res.data === "done") {
          window.location.href = "/";
          localStorage.removeItem("userInfo");
        }
      });
    dispatch({
      type: USER_LOGOUT,
    });
    localStorage.removeItem("userInfo");
  };
