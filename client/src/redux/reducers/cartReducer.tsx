import {
  ADD_TO_CART,
  REMOVE_TO_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  LOAD_CURRENT_ITEM,
} from "../constants/cartConstants";

interface cartInfo {
  _id?: string;
  user?: string;
}

export interface cartState {
  cartInfo?: cartInfo | null;
}

interface Action {
  type: string;
  payload: string;
}

export const userLoginReducer = (state: cartState, action: Action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        cartInfo: action.payload,
      };
    case REMOVE_TO_CART:
      return {
        cartInfo: action.payload,
      };
    case INCREASE_QUANTITY:
      return {};
    case DECREASE_QUANTITY:
      return {};
    case LOAD_CURRENT_ITEM: {
      return {};
    }
    default:
      return { ...state };
  }
};
