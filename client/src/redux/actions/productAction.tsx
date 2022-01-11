import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../store";
import axios from "../../axios";
import {
  GET_BRAND_FAILURE,
  GET_BRAND_REQUEST,
  GET_BRAND_SUCCESS,
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

      //localStorage.setItem("cartInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: GET_BRAND_FAILURE,
        payload: error,
      });
    }
  };
