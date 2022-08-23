import { AnyAction } from "redux";
import {
  GET_TYPE_BRAND_FAILURE,
  GET_TYPE_BRAND_REQUEST,
  GET_TYPE_BRAND_SUCCESS,
  GET_TYPE_FAILURE,
  GET_TYPE_REQUEST,
  GET_TYPE_SUCCESS,
} from "../constants/productTypeConstants";

interface proTypeInfo {
  _id?: string;
  productType?: string;
  slug?: string;
  content: Array<proTypeType>;
}
interface proTypeType {
  _id?: string;
}

export interface proTypeState {
  proTypeInfo?: Array<proTypeInfo>;
  isFetching?: boolean;
  error?: boolean;
}

export const listProTypeReducer = (state: proTypeInfo, action: AnyAction) => {
  switch (action.type) {
    case GET_TYPE_REQUEST:
      return {
        isFetching: true,
        error: false,
      };
    case GET_TYPE_SUCCESS:
      return {
        proTypeInfo: action.payload,
        isFetching: false,
        error: false,
      };
    case GET_TYPE_FAILURE:
      return {
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export const listBrandProTypeReducer = (
  state: proTypeInfo,
  action: AnyAction
) => {
  switch (action.type) {
    case GET_TYPE_BRAND_REQUEST:
      return {
        isFetching: true,
        error: false,
      };
    case GET_TYPE_BRAND_SUCCESS:
      return {
        proTypeInfo: action.payload,
        isFetching: false,
        error: false,
      };
    case GET_TYPE_BRAND_FAILURE:
      return {
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};
