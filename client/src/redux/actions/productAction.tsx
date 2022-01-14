import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../store";
import axios from "../../axios";
import {
  GET_BRAND_FAILURE,
  GET_BRAND_REQUEST,
  GET_BRAND_SUCCESS,
  GET_DETAIL_PRODUCT_FAILURE,
  GET_DETAIL_PRODUCT_REQUEST,
  GET_DETAIL_PRODUCT_SUCCESS,
  GET_LIST_PRODUCT_FAILURE,
  GET_LIST_PRODUCT_REQUEST,
  GET_LIST_PRODUCT_SUCCESS,
} from "../constants/productConstants";

export const getBrand =
  (id: string): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>,
    getState: () => RootState
  ): Promise<void> => {
    try {
      dispatch({ type: GET_BRAND_REQUEST });

      // const {
      //   userLogin: { userInfo },
      // } = getState();

      const { data } = await axios.get(`/brand/${id}`);
      dispatch({
        type: GET_BRAND_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_BRAND_FAILURE,
        payload: error,
      });
    }
  };

export const getListProduct =
  (): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>,
    getState: () => RootState
  ): Promise<void> => {
    try {
      dispatch({ type: GET_LIST_PRODUCT_REQUEST });

      // const {
      //   userLogin: { userInfo },
      // } = getState();

      const { data } = await axios.get(`/product`);
      dispatch({
        type: GET_LIST_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_LIST_PRODUCT_FAILURE,
        payload: error,
      });
    }
  };

export const getDetailProduct =
  (id: string): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>,
    getState: () => RootState
  ): Promise<void> => {
    try {
      dispatch({ type: GET_DETAIL_PRODUCT_REQUEST });

      // const {
      //   userLogin: { userInfo },
      // } = getState();

      const { data } = await axios.get(`/product/${id}`);
      dispatch({
        type: GET_DETAIL_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_DETAIL_PRODUCT_FAILURE,
        payload: error,
      });
    }
  };
