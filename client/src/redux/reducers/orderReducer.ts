import { ORDER_ADD_ITEM, ORDER_REMOVE_ITEM } from "../constants/orderConstants";

interface Action {
  type: string;
  payload: string;
}

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

export const orderItemsReducer = (state: orderItemsState, action: Action) => {
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
          (order) => order._id !== action.payload
        ),
      };
    default:
      return { ...state };
  }
};
