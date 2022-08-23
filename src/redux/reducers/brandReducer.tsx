import { AnyAction } from "redux";
import {
  GET_BRAND_FAILURE,
  GET_BRAND_PRODUCT_FAILURE,
  GET_BRAND_PRODUCT_REQUEST,
  GET_BRAND_PRODUCT_SUCCESS,
  GET_BRAND_REQUEST,
  GET_BRAND_SUCCESS,
} from "../constants/brandConstants";
import { productInfo } from "./productReducer";

interface brandInfo {
  _id?: string;
  name?: string;
  image?: string;
  content?: any;
}

export interface brandState {
  brandInfo?: brandInfo | null;
  isFetching?: boolean;
  error?: boolean;
}

interface brandProductInfo {
  products?: Array<productInfo>;
  pageNumber?: number;
  pages?: number;
  totalProducts?: number;
}

export interface brandProductState {
  brandProductInfo?: brandProductInfo;
  isFetching?: boolean;
  error?: boolean;
}

export const brandReducer = (state: brandInfo, action: AnyAction) => {
  switch (action.type) {
    case GET_BRAND_REQUEST:
      return {
        isFetching: true,
        error: false,
      };
    case GET_BRAND_SUCCESS:
      return {
        brandInfo: action.payload,
        isFetching: false,
        error: false,
      };
    case GET_BRAND_FAILURE:
      return {
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export const listBrandProductReducer = (
  state: brandProductInfo,
  action: AnyAction
) => {
  switch (action.type) {
    case GET_BRAND_PRODUCT_REQUEST:
      return {
        isFetching: true,
        error: false,
      };
    case GET_BRAND_PRODUCT_SUCCESS:
      return {
        brandProductInfo: action.payload,
        isFetching: false,
        error: false,
      };
    case GET_BRAND_PRODUCT_FAILURE:
      return {
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};
