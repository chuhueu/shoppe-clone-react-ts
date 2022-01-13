import {
  CREATE_CART_REQUEST,
  CREATE_CART_SUCCESS,
  CREATE_CART_FAILURE,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_FAILURE,
  ADD_TO_CART_SUCCESS,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  GET_CART_FAILURE,
  REMOVE_TO_CART_REQUEST,
  REMOVE_TO_CART_SUCCESS,
  REMOVE_TO_CART_FAILURE,
  UPDATE_QUANTITY_REQUEST,
  UPDATE_QUANTITY_SUCCESS,
  UPDATE_QUANTITY_FAILURE,
} from "../constants/cartConstants";
import { AnyAction } from "redux";
interface cartInfo {
  _id?: string;
  cart?: string;
  product?: string;
  brand?: string;
  name?: string;
  image?: string;
  price?: number;
  discount?: number;
  quantity?: number;
}

export interface cartState {
  cartInfo?: Array<cartInfo>;
  isFetching?: boolean;
  error?: boolean;
}

// interface Action {
//   type: string;
//   payload: string;
// }

export interface cart {
  userId?: string;
  isFetching?: boolean;
  error?: boolean;
}
export const createCartReducer = (state: cart, action: AnyAction) => {
  switch (action.type) {
    case CREATE_CART_REQUEST:
      return {
        isFetching: true,
        error: false,
      };
    case CREATE_CART_SUCCESS:
      return {
        cart: action.payload,
        isFetching: false,
        error: false,
      };
    case CREATE_CART_FAILURE:
      return {
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export const cartItemReducer = (state: cartState, action: AnyAction) => {
  switch (action.type) {
    case ADD_TO_CART_REQUEST:
      return {
        isFetching: true,
        error: false,
      };
    case ADD_TO_CART_SUCCESS:
      return {
        cartItemInfo: action.payload,
        isFetching: false,
        error: false,
      };
    case ADD_TO_CART_FAILURE:
      return {
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export const getCartReducer = (state: cartState, action: AnyAction) => {
  switch (action.type) {
    case GET_CART_REQUEST:
      return {
        isFetching: true,
        error: false,
      };
    case GET_CART_SUCCESS:
      return {
        cartInfo: action.payload,
        isFetching: false,
        error: false,
      };
    case GET_CART_FAILURE:
      return {
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export const removeCartReducer = (state: cartState, action: AnyAction) => {
  switch (action.type) {
    case REMOVE_TO_CART_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case REMOVE_TO_CART_SUCCESS:
      return {
        cartInfo: state.cartInfo?.filter(
          (cart) => cart._id !== action.payload.id
        ),
        isFetching: false,
        error: false,
      };
    case REMOVE_TO_CART_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export const updateQtyCartReducer = (state: cartState, action: AnyAction) => {
  switch (action.type) {
    case UPDATE_QUANTITY_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case UPDATE_QUANTITY_SUCCESS:
      return {
        //cartInfo: action.payload,
        cartInfo: state.cartInfo?.map((cart) =>
          cart._id === action.payload.id
            ? { ...cart, quantity: action.payload.quantity }
            : cart
        ),
        isFetching: false,
        error: false,
      };
    case UPDATE_QUANTITY_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};
