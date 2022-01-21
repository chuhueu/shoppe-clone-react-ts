import { AnyAction } from "redux";
import {
  GET_CATEGORY_FAILURE,
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
} from "../constants/categoryConstants";

export interface categoryInfo {
  _id?: string;
  category?: string;
  slug?: string;
  content: Array<Type>;
}
interface Type {
  _id?: string;
}

export interface categoryState {
  categoryInfo: Array<categoryInfo>;
  isFetching?: boolean;
  error?: boolean;
}

export const listCategoryReducer = (
  state: categoryState,
  action: AnyAction
) => {
  switch (action.type) {
    case GET_CATEGORY_REQUEST:
      return {
        isFetching: true,
        error: false,
      };
    case GET_CATEGORY_SUCCESS:
      return {
        categoryInfo: action.payload,
        isFetching: false,
        error: false,
      };
    case GET_CATEGORY_FAILURE:
      return {
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};
