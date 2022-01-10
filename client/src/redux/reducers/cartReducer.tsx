import {
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  LOAD_CURRENT_ITEM,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_FAILURE,
  ADD_TO_CART_SUCCESS,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  GET_CART_FAILURE,
  REMOVE_TO_CART_REQUEST,
  REMOVE_TO_CART_SUCCESS,
  REMOVE_TO_CART_FAILURE,
} from "../constants/cartConstants";

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
  map?: any;
}

export interface cartState {
  cartInfo?: Array<cartInfo>;
  isFetching?: boolean;
  error?: boolean;
}

interface Action {
  type: string;
  payload: string;
}

export const cartItemReducer = (state: cartState, action: Action) => {
  switch (action.type) {
    case ADD_TO_CART_REQUEST:
      return {
        cartItemInfo: action.payload,
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

export const cartReducer = (state: cartState, action: Action) => {
  switch (action.type) {
    case GET_CART_REQUEST:
      return {
        cartInfo: action.payload,
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

export const removeCartReducer = (state: cartState, action: Action) => {
  switch (action.type) {
    case REMOVE_TO_CART_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case REMOVE_TO_CART_SUCCESS:
      return {
        cartInfo: state.cartInfo?.filter((cart) => cart._id !== action.payload),
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
