import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../store/userStore";
import axios from "../../axios";
import {
  ADD_TO_CART,
  REMOVE_TO_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  LOAD_CURRENT_ITEM,
} from "../constants/cartConstants";

export const addToCart =
  (itemID: string): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      const { data } = await axios.post("/cart/add", {});
      dispatch({
        type: ADD_TO_CART,
        payload: data,
      });
    } catch (error) {}
  };
