import { AnyAction } from "redux";
import { ORDER_ADD_ITEM, ORDER_REMOVE_ITEM } from "../constants/orderConstants";

export interface orderItems {
  _id?: string;
  product?: string;
  brand?: string;
  name?: string;
  image?: string;
  price?: number;
  discount?: number;
  quantity?: number;
}

export interface orderItemsState {
  orderItems: Array<orderItems>;
}

export const orderItemsReducer = (
  state = { orderItems: [] },
  action: AnyAction
) => {
  switch (action.type) {
    case ORDER_ADD_ITEM:
      return {
        ...state,
        orderItems: [...state.orderItems, action.payload],
      };
    case ORDER_REMOVE_ITEM:
      return {
        ...state,
        orderItems: state.orderItems?.filter(
          (order: any) => order._id !== action.payload
        ),
      };
    default:
      return { ...state };
  }
};
