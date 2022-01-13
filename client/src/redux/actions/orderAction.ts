import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../store";
import { ORDER_ADD_ITEM, ORDER_REMOVE_ITEM } from "../constants/orderConstants";

export const addOrderItem =
  (
    id: any,
    product: any,
    brand: any,
    name: any,
    image: any,
    price: any,
    discount: any,
    quantity: any
  ): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>,
    getState: () => RootState
  ): Promise<void> => {
    dispatch({
      type: ORDER_ADD_ITEM,
      payload: {
        _id: id,
        product: product,
        brand: brand,
        name: name,
        image: image,
        price: price,
        discount: discount,
        quantity: quantity,
      },
    });
    localStorage.setItem("orderItems", JSON.stringify(getState().orderItems));
  };

export const removeOrderItem =
  (id: string): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>,
    getState: () => RootState
  ): Promise<void> => {
    dispatch({
      type: ORDER_REMOVE_ITEM,
      payload: id,
    });
    localStorage.setItem("orderItems", JSON.stringify(getState().orderItems));
  };
