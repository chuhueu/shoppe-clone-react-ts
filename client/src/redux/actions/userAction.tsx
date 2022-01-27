import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../store";
import axios from "../../axios";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILED,
  USER_GET_ADDRESS,
  USER_GET_ONE_ADDRESS,
  USER_ADD_ADDRESS,
  USER_UPDATE_ADDRESS,
  USER_REMOVE_ADDRESS,
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
    dispatch({
      type: USER_LOGOUT,
    });
    localStorage.removeItem("userInfo");
    localStorage.removeItem("orderItems");
  };

export const getAddress =
  (): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    const userInfo = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo")!)
      : null;
    const { data } = await axios.get(`/address/${userInfo._id}`);
    dispatch({
      type: USER_GET_ADDRESS,
      payload: data,
    });
  };
export const getOneAddress =
  (): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    const userInfo = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo")!)
      : null;
    const { data } = await axios.get(
      `/address/default/${userInfo.addressDefault}`
    );
    dispatch({
      type: USER_GET_ONE_ADDRESS,
      payload: data,
    });
  };
export const addAddress =
  (
    user: string,
    fullName: string,
    phoneNumber: string,
    street: string,
    town: string,
    district: string,
    province: string
  ): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    const { data } = await axios.post("/address", {
      user,
      fullName,
      phoneNumber,
      street,
      town,
      district,
      province,
    });

    dispatch({
      type: USER_ADD_ADDRESS,
      payload: data,
    });
  };
export const updateAddress =
  (
    id: string,
    address: any
  ): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    const updateAddress = await axios.put(`/address/${id}`, { address });
    dispatch({
      type: USER_UPDATE_ADDRESS,
      payload: updateAddress.data,
    });
  };

export const removeAddress =
  (id: string): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    const deleteAddress = await axios.delete(`/address/${id}`);
    dispatch({
      type: USER_REMOVE_ADDRESS,
      payload: deleteAddress.data,
    });
  };
