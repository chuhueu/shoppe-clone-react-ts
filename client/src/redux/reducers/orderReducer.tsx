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
  state = { orderItems: [], quantity: 0, total: 0 },
  action: AnyAction
) => {
  switch (action.type) {
    case ORDER_ADD_ITEM:
      return {
        ...state,
        orderItems: [...state.orderItems, action.payload],
        quantity: ++state.quantity,
        total: state.total + action.payload.price * action.payload.quantity,
      };
    case ORDER_REMOVE_ITEM:
      const item = action.payload;

      return {
        ...state,
        orderItems: state.orderItems?.filter(
          (order: any) => order._id !== item
        ),
      };
    default:
      return { ...state };
  }
};
