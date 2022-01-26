import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../store";
import axios from "../../axios";
import {
  GET_BRAND_FAILURE,
  GET_BRAND_PRODUCT_FAILURE,
  GET_BRAND_PRODUCT_REQUEST,
  GET_BRAND_PRODUCT_SUCCESS,
  GET_BRAND_REQUEST,
  GET_BRAND_SUCCESS,
} from "../constants/brandConstants";

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

export const getBrandProduct =
  ({
    id,
    type,
    pageNumber,
    sortOrder,
  }: any): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>,
    getState: () => RootState
  ): Promise<void> => {
    try {
      dispatch({ type: GET_BRAND_PRODUCT_REQUEST });

      const { data } = await axios.get(
        `/product/brand/${id}?type=${type}&pageNumber=${pageNumber}&sortOrder=${sortOrder}`
      );
      dispatch({
        type: GET_BRAND_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_BRAND_PRODUCT_FAILURE,
        payload: error,
      });
    }
  };
