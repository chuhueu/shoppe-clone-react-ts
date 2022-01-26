import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../store";
import axios from "../../axios";
import {
  GET_TYPE_BRAND_FAILURE,
  GET_TYPE_BRAND_REQUEST,
  GET_TYPE_BRAND_SUCCESS,
  GET_TYPE_FAILURE,
  GET_TYPE_REQUEST,
  GET_TYPE_SUCCESS,
} from "../constants/productTypeConstants";

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

export const getListBrandProType =
  (id: string): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>,
    getState: () => RootState
  ): Promise<void> => {
    try {
      dispatch({ type: GET_TYPE_BRAND_REQUEST });

      // const {
      //   userLogin: { userInfo },
      // } = getState();

      const { data } = await axios.get(`/productType/brand/${id}`);
      dispatch({
        type: GET_TYPE_BRAND_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_TYPE_BRAND_FAILURE,
        payload: error,
      });
    }
  };
