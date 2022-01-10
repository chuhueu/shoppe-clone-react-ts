import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../store";
import axios from "../../axios";
import {
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  LOAD_CURRENT_ITEM,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  GET_CART_FAILURE,
  REMOVE_TO_CART_REQUEST,
  REMOVE_TO_CART_SUCCESS,
  REMOVE_TO_CART_FAILURE,
} from "../constants/cartConstants";

export const addToCart =
  (
    product: any,
    brand: any,
    name: any,
    image: any,
    price: any,
    discount: any,
    quantity: number
  ): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>,
    getState: () => RootState
  ): Promise<void> => {
    try {
      dispatch({ type: ADD_TO_CART_REQUEST });

      // const {
      //   userLogin: { userInfo },
      // } = getState();

      const userInfo = localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo")!)
        : null;

      const { data } = await axios.post(`/cart/add/${userInfo._id}`, {
        product,
        brand,
        name,
        image,
        price,
        discount,
        quantity,
      });
      dispatch({
        type: ADD_TO_CART_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ADD_TO_CART_FAILURE,
        payload: error,
      });
    }
  };

export const getCart =
  (): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>,
    getState: () => RootState
  ): Promise<void> => {
    try {
      dispatch({ type: GET_CART_REQUEST });

      // const {
      //   userLogin: { userInfo },
      // } = getState();

      const userInfo = localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo")!)
        : null;

      const { data } = await axios.get(`/cart/${userInfo._id}`);
      dispatch({
        type: GET_CART_SUCCESS,
        payload: data,
      });

      localStorage.setItem("cartInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: GET_CART_FAILURE,
        payload: error,
      });
    }
  };

export const removeCartItem =
  (itemID: string): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>,
    getState: () => RootState
  ): Promise<void> => {
    try {
      dispatch({ type: REMOVE_TO_CART_REQUEST });

      // const {
      //   userLogin: { userInfo },
      // } = getState();

      const { data } = await axios.delete(`/cart/delete/${itemID}`);
      dispatch({
        type: REMOVE_TO_CART_SUCCESS,
        payload: data,
      });
      // localStorage.setItem(
      //   "cartInfo",
      //   JSON.stringify(getState().cart)
      // );
    } catch (error) {
      dispatch({
        type: REMOVE_TO_CART_FAILURE,
        payload: error,
      });
    }
  };
