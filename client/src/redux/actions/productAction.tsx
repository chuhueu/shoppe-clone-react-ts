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
  GET_FILTER_PRODUCT_FAILURE,
  GET_FILTER_PRODUCT_REQUEST,
  GET_FILTER_PRODUCT_SUCCESS,
  GET_LIST_PRODUCT_FAILURE,
  GET_LIST_PRODUCT_REQUEST,
  GET_LIST_PRODUCT_SUCCESS,
  GET_TYPE_FAILURE,
  GET_TYPE_REQUEST,
  GET_TYPE_SUCCESS,
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

export const getFilterProduct =
  ({
    category,
    type,
    min,
    max,
    rating,
    pageNumber,
    sortOrder,
  }: any): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>,
    getState: () => RootState
  ): Promise<void> => {
    try {
      dispatch({ type: GET_FILTER_PRODUCT_REQUEST });

      const { data } = await axios.get(
        `/product/list?category=${category}&type=${type}&min=${min}&max=${max}&rating=${rating}&pageNumber=${pageNumber}&sortOrder=${sortOrder}`
      );
      dispatch({
        type: GET_FILTER_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_FILTER_PRODUCT_FAILURE,
        payload: error,
      });
    }
  };

export const getListProType =
  (): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>,
    getState: () => RootState
  ): Promise<void> => {
    try {
      dispatch({ type: GET_TYPE_REQUEST });

      // const {
      //   userLogin: { userInfo },
      // } = getState();

      const { data } = await axios.get(`/productType`);
      dispatch({
        type: GET_TYPE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_TYPE_FAILURE,
        payload: error,
      });
    }
  };
